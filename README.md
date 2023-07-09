<!-- "build-rename": "npm run build-rename-js && npm run build-rename-css",
"build-rename-js": "renamer --find \"/main\\.[^\\.]+\\./i\" --replace \"main.\" build\\\/static\\\/js\\\/_",
"build-rename-css": "renamer --find \"/main\\.[^\\.]+\\./i\" --replace \"main.\" build\\\/static\\\/css\\\/_",
"build": "react-scripts --openssl-legacy-provider build && npm run build-rename",
"build:dev": "env-cmd -f .env.dev react-scripts --openssl-legacy-provider build && npm run build-rename",
"build:prod": "env-cmd -f .env.prod react-scripts build && npm run build-rename", -->

<!-- rezolva problema la refresh de la pagina hostata dar anuleaza pwa-ul -->
<!-- AWS Amplify Console -> App Settings -> Rewrites and redirects -> Edit -> add rule -> 
Source Address -> /<^[^.]+$|.(?!(css|gif|ico|jpg|js|png|txt|svg|woff|woff2|ttf|map|json)$)([^.]+$)>
Target address* -> /index.html
Type* -> 200 (Rewrite) -->