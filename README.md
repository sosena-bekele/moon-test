# Moon Test Workspace

This is a test workspace for Moon CI with 5 Node.js projects:

## Projects

### Apps (4 projects)
- `apps/app1` - Uses shared utility functions
- `apps/app2` - Uses shared utility functions with different config
- `apps/app3` - Uses shared utility functions with minimal config
- `apps/app4` - Uses shared utility functions with disabled config

### Libraries (1 project)
- `libs/test` - Shared library with utility functions used by all apps

## Structure

```
moon-test/
├── moon.yml                 # Workspace configuration
├── package.json            # Root package.json with workspaces
├── apps/
│   ├── app1/               # App 1
│   ├── app2/               # App 2
│   ├── app3/               # App 3
│   └── app4/               # App 4
└── libs/
    └── test/               # Shared library
```

## Tasks

All projects inherit a `typecheck` task that runs `tsc --noEmit` to check TypeScript types without emitting files.

## Dependencies

- All apps depend on the shared library `@moon-test/test-lib`
- The shared library provides utility functions used by all apps
- All projects use TypeScript with strict type checking

## Testing the Bug

This workspace can be used to test the Moon CI affected tracking bug where:
1. Changes to the shared library should affect all apps
2. The `typecheck` task should be inherited by all projects
3. Dependent tasks should be properly tracked when files change
