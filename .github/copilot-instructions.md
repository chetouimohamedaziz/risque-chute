# RisqueChute AI Coding Guidelines

## Architecture Overview
- **Framework**: Angular 21 standalone application with no NgModules
- **UI Library**: Angular Material with custom theming (azure primary, blue tertiary, Roboto typography, density 0)
- **Forms**: Reactive Forms with FormBuilder injection pattern
- **State Management**: Signals for component state (e.g., `title = signal('risque-chute')`)
- **Routing**: Not yet implemented; single-page stepper-based flow
- **Styling**: SCSS with Material theme integration in `src/styles.scss`

## Key Patterns
- **Component Structure**: Standalone components with explicit imports (e.g., `imports: [MatButtonModule, ...]`)
- **Form Groups**: Multi-step forms using `FormBuilder.group()` with Validators.required
- **Material Components**: Stepper for wizard-like interfaces (see `app.html` for example)
- **Injection**: Use `inject()` for services like FormBuilder instead of constructor injection

## Development Workflow
- **Serve**: `ng serve` (runs on http://localhost:4200)
- **Build**: `ng build` (outputs to `dist/`)
- **Test**: `ng test` uses Vitest runner (not Jasmine/Karma)
- **Watch Mode**: `ng build --watch --configuration development`

## Code Style & Conventions
- **TypeScript**: Strict mode enabled with `noImplicitOverride`, `strictTemplates`, etc.
- **Formatting**: Prettier with 100 char width, single quotes, Angular HTML parser
- **Imports**: Group Angular core, then Material, then forms/router
- **Selectors**: Default Angular CLI naming (e.g., `app-root`)

## Testing
- **Runner**: Vitest with Angular TestBed
- **Setup**: `TestBed.configureTestingModule({ imports: [Component] })`
- **Assertions**: Standard expect() syntax, focus on component creation and rendering

## File Structure
- `src/app/app.ts`: Main component with stepper logic
- `src/app/app.html`: Material stepper template with form controls
- `src/styles.scss`: Global Material theming
- No services or additional components yet; expand from `app/` directory