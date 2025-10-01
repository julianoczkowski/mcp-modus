/**
 * Simple test script to verify the MCP server is working
 * This simulates how an MCP client would interact with the server
 */

import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log('Starting MCP Server Test...\n');

const serverPath = join(__dirname, 'dist', 'index.js');
const server = spawn('node', [serverPath], {
  stdio: ['pipe', 'pipe', 'pipe'],
});

let responseBuffer = '';
let requestId = 1;

server.stdout.on('data', (data) => {
  responseBuffer += data.toString();

  // Try to parse complete JSON-RPC messages
  const lines = responseBuffer.split('\n');
  responseBuffer = lines.pop() || ''; // Keep incomplete line in buffer

  for (const line of lines) {
    if (line.trim()) {
      try {
        const response = JSON.parse(line);
        console.log('Response:', JSON.stringify(response, null, 2));
      } catch (e) {
        // Not JSON, might be stderr output
      }
    }
  }
});

server.stderr.on('data', (data) => {
  console.log('Server:', data.toString().trim());
});

server.on('error', (error) => {
  console.error('Error:', error);
});

// Send initialization request
setTimeout(() => {
  console.log('\n--- Test 1: Initialize ---');
  sendRequest({
    jsonrpc: '2.0',
    id: requestId++,
    method: 'initialize',
    params: {
      protocolVersion: '2024-11-05',
      capabilities: {},
      clientInfo: {
        name: 'test-client',
        version: '1.0.0',
      },
    },
  });
}, 100);

// List tools
setTimeout(() => {
  console.log('\n--- Test 2: List Tools ---');
  sendRequest({
    jsonrpc: '2.0',
    id: requestId++,
    method: 'tools/list',
  });
}, 500);

// Search for button component
setTimeout(() => {
  console.log('\n--- Test 3: Search Components (button) ---');
  sendRequest({
    jsonrpc: '2.0',
    id: requestId++,
    method: 'tools/call',
    params: {
      name: 'search_components',
      arguments: {
        query: 'button',
      },
    },
  });
}, 1000);

// Get button documentation
setTimeout(() => {
  console.log('\n--- Test 4: Get Component Docs (button) ---');
  sendRequest({
    jsonrpc: '2.0',
    id: requestId++,
    method: 'tools/call',
    params: {
      name: 'get_component_docs',
      arguments: {
        component: 'button',
      },
    },
  });
}, 1500);

// List all components
setTimeout(() => {
  console.log('\n--- Test 5: List All Components ---');
  sendRequest({
    jsonrpc: '2.0',
    id: requestId++,
    method: 'tools/call',
    params: {
      name: 'list_all_components',
      arguments: {},
    },
  });
}, 2000);

// Find by attribute
setTimeout(() => {
  console.log('\n--- Test 6: Find by Attribute (disabled) ---');
  sendRequest({
    jsonrpc: '2.0',
    id: requestId++,
    method: 'tools/call',
    params: {
      name: 'find_by_attribute',
      arguments: {
        attribute: 'disabled',
      },
    },
  });
}, 2500);

// Cleanup
setTimeout(() => {
  console.log('\n--- All tests complete ---');
  server.kill();
  process.exit(0);
}, 3500);

function sendRequest(request) {
  const message = JSON.stringify(request) + '\n';
  server.stdin.write(message);
}
