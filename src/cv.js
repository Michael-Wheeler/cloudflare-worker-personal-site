addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

function render() {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Michael Wheeler - CV</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 20px;
            background-color: #f4f4f4;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
            background: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
        h1, h2, h3 {
            color: #333;
        }
        .contact-info {
            margin-bottom: 20px;
        }
        .contact-info p {
            margin: 5px 0;
        }
        .section {
            margin-bottom: 20px;
        }
        .section h2 {
            border-bottom: 2px solid #333;
            padding-bottom: 5px;
            margin-bottom: 10px;
        }
        .job-title {
            font-weight: bold;
        }
        .date-range {
            color: #777;
        }
        .job-details {
            margin-top: 5px;
        }
        .key-tools {
            font-style: italic;
        }
        ul {
            padding-left: 20px;
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <h1>Michael Wheeler</h1>
            <div class="contact-info">
                <p>Lead Software Developer</p>
                <p>Email: <a href="mailto:michael.wheeler856@gmail.com">michael.wheeler856@gmail.com</a></p>
            </div>
        </header>
        <section class="section profile">
            <h2>Profile</h2>
            <p>Software developer with varied experience working in small, cross-functional teams through the full application lifecycle. Projects include web and app backends, package repositories, data pipelines, web and desktop applications and test automation frameworks. Focus on testing and fast, reliable deployment via CI/CD pipelines.</p>
        </section>
        <section class="section experience">
            <h2>Experience</h2>
            <div class="job">
                <p><strong>OVO</strong></p>
                <p class="job-title">Software Developer</p>
                <p class="date-range">April 2022 - Present</p>
                <div class="job-details">
                    <p>Manage backend projects for the frontend platform team, building services such as a package registry and distributor for mobile module federation, unified customer API, services to surface and/or consume customer data. As part of a frontend focussed part of the business, I make contributions to app and web frontend code, and spend a lot of time upskilling frontend developers in backend technology. It also means that I am responsible for the entire lifecycle of these services, from architecting to maintenance, and that the focus is on simplicity, so that non-backend specialists can contribute.</p>
                    <p class="key-tools">Key tools: Typescript (Node.js, React, React Native), NestJS, GraphQL, Kafka, Docker, Cloudflare, GitHub actions, Vercel, AWS Lambda, Terraform, AWS ECS.</p>
                </div>
            </div>
            <br>

            <div class="job">
                <p><strong>Opia Limited, Newcastle upon Tyne</strong></p>
                <p class="job-title">Development Team Lead</p>
                <p class="date-range">March 2021 – March 2022</p>
                <div class="job-details">
                    <p>Leading the internal product development team, responsibilities include the core event-driven microservice platform, supplier integrations with banks, recyclers and couriers and a base template for client sites. Team leader responsibilities included spreading development and agile best practices, training and managing developers and communicating with the wider business.</p>
                    <p class="key-tools">PHP, MySQL, Vue.js, Redis streams. DevOps Tools: Docker, Rancher, Jenkins.</p>
                </div>
                <p class="job-title">Senior Software Developer</p>
                <p class="date-range">September 2020 – March 2021</p>
                <p class="job-title">Software Developer</p>
                <p class="date-range">September 2019 – September 2020</p>
            </div>
            <br>

            <div class="job">
                <p><strong>MagenTys, an NTT DATA company, London</strong></p>
                <p class="job-title">Senior Application Software Development Consultant</p>
                <p class="date-range">May 2019 - Present</p>
                <div class="job-details">
                    <p>Creation of a test automation framework for a large-scale digital transformation project, utilising REST API’s to automate integration tests.</p>
                    <p class="key-tools">Framework: C#, Ninject, Serilog. DevOps Tools: Azure, Docker, Kubernetes, Helm, Bamboo, Azure, Artifactory.</p>
                </div>
                <p class="job-title">Software Developer</p>
                <p class="date-range">September 2018 – May 2019</p>
                <div class="job-details">
                    <p>Building of ETL processes, performing data analysis and creation of data dashboards. A DataOps approach was used to ensure fast, scalable and reliable pipeline setup.</p>
                    <p class="key-tools">Data Pipeline and Dashboarding: Python, Elasticsearch, Grafana, Pandas, Webhooks. DevOps Tools: AWS, Docker, Jenkins.</p>
                </div>
            </div>
            <div class="job">
                <p class="job-title">Software Developer</p>
                <p class="date-range">October 2017 – September 2018</p>
                <p><strong>MagenTys, London</strong></p>
                <div class="job-details">
                    <p>Project to replace till and back office hardware at a leading British retailer. Included creation, deployment and maintenance of several new applications as part of a cross-functional, agile team. DevOps best practices were implemented to manage, build and release automation.</p>
                    <p class="key-tools">Desktop Applications: Java, Node.js (Electron), C# (WPF, ASP.NET), websockets. DevOps Tools: Terraform, Ansible, Jenkins, Azure, Nuget, Nexus, Powershell and Bash Scripting.</p>
                </div>
            </div>
        </section>
        <section class="section education">
            <h2>Education</h2>
            <p><strong>University of Warwick</strong> - Physics (MPhys, BSc)</p>
            <p>Oct 2011 – Jun 2015</p>
            <ul>
                <li>Masters research project: X-ray Photoelectron Spectroscopy of Modified Semiconductor Surfaces.</li>
                <li>Won a grant of £2700 from the Lord Rootes Memorial Fund to complete a solo 5,000km bike tour across Europe.</li>
            </ul>
        </section>
    </div>
</body>
</html>
`;
}

async function handleRequest(request) {
  const html = render();
  return new Response(html, {
    headers: {
      'content-type': 'text/html',
    },
  });
}
