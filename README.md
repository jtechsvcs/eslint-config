# Eslint Configurations Repository

## Purpose

* This is the repo for the standard baseline eslint configurations.

## Architecture

* Additional configurations should be placed under configs
* Any utilities should be placed under tools
* Each configuration should only address one general paradigm
* Each configuration should maintain it's own peerDependencies for plugins that are required to satisfy the configuration's requirements.

## Branches

1. standard

   * The standard javascript configuration

2. typescript

    * Extends the standard configuration.
    * Includes @typescript-eslint configurations
    * peerDependencies:
        1. @typescript-eslint/parser
        2. @typescript-eslint/eslint-plugin
        3. @typescript-eslint/typescript-estree

3. react

    * Extends Standard Configuration
    * Includes eslint-plugin-react configurations
    * peerDependencies:
        1. eslint-plugin-react

4. react-typescript

    * Extends typescript and react configurations
    * peerDependencies:
        1. Included from React & Typescript

5. vue

    * Extends standard configuration
    * Includes eslint-plugin-vue configurations
    * peerDependencies:
        1. eslint-plugin-vue

6. vue-typescript

    * Extends typescript and vue configurations
    * peerDependencies:
        1. Includes from vue & typescript
