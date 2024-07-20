addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

function render() {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Developer CV</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin-top: 50px;
        }
    </style>
</head>
<body>
    <h1>Michael Wheeler</h1>
    <p>Welcome to my CV website. Click the buttons below to view my GitHub repository, LinkedIn profile, and download my CV.</p>
    
    <div class="button-container">
        <a href="https://github.com/Michael-Wheeler">GitHub</a>
        <a href="https://www.linkedin.com/in/michael-wheeler-62b78499">LinkedIn</a>
        <a href="https://cv.michael-wheeler856.workers.dev">CV</a>
    </div>
</body>
</html>`;
}

async function handleRequest(request) {
  const html = render();
  return new Response(html, {
    headers: {
      'content-type': 'text/html',
    },
  });
}
