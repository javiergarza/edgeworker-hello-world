# edgeworker-hello-world
Showcasing GitHub workflows to deploy an Akamai "Hello World" EdgeWorker

A commit on this repo will trigger a GitHub workflow that will deploy the EdgeWorker on the Akamai Edge Platform

## Files
- main.js (hello world JavaScript code)
- bundle.json (manifest file indicating the version information)
- edgeworker-property-rule.json (property manager json code that attaches the edgeworker with a property. Please remember to update the EdgeWorkerId to match your own)

## Resources
- [EdgeWorkers Getting Started Guide](https://developer.akamai.com/akamai-edgeworkers-get-started)
- [EdgeWorkers Sample Code](https://github.com/akamai/edgeworkers-examples)
- [EdgeWorkers Developer Page](https://developer.akamai.com/edgeworkers)
- [EdgeWorkers User Guide](https://learn.akamai.com/en-us/webhelp/edgeworkers/edgeworkers-user-guide/GUID-4CC14D7E-D92D-4F2D-9292-17F8BE6E2DAE.html)
- [EdgeWorkers API Guide](https://developer.akamai.com/api/web_performance/edgeworkers/v1.html)
- [EdgeWorkers CLI](https://github.com/akamai/cli-edgeworkers)
- [Deploy EdgeWorkers GitHub Action](https://github.com/marketplace/actions/deploy-akamai-edgeworkers)
