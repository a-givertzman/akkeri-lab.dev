# S&A Lab web-site project

Our site sources

## How to update the project

Please follow the steps to update site content

1. Install / Update npm

    Check for node, npm, and npx

    ```bash
    node --version
    npm --version
    npx --version
    ```

    ```bash
    # install

    # update
    sudo npm update -g npm
    ```

2. Install / Update gulp V5

    ```bash
    npm install --global gulp-cli
    ```

3. Install the gulp package in your devDependencies

    ```bash
    npm install --save-dev gulp
    ```

4. Edit

    Edit files in thr `src/`

5. Rebuild
    
    Update dependencies
    ```bash
    npm install -g npm-check-updates && npm-check-updates -u && rm -fr node_modules && npm install
    ```

    For development with the hot-reload use

    ```bash
    gulp dev
    ```

    For release use

    ```bash
    gulp build
    ```

6. Deploy

    For deploing use github action

    [CI -> Deploy to My website](https://github.com/a-givertzman/akkeri-lab.dev/actions/workflows/deploy.yaml)