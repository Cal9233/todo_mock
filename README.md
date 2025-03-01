React Todo Application Testing Skills Assessment
Overview
This assessment evaluates your proficiency in testing React frontend applications. You'll be creating a comprehensive test suite for a Todo application that demonstrates your understanding of testing principles, best practices, and implementation skills.
Project Description
You will be testing a React Todo application that includes:

Todo creation
Todo listing with filtering (All, Active, Completed)
Todo editing
Todo completion toggling
Todo deletion
Batch actions (mark all complete, clear completed)
Local storage persistence
Responsive design for mobile and desktop

Testing Requirements
Unit Tests (Jest + React Testing Library)

Components

Test TodoItem rendering with various states (complete/incomplete)
Test TodoList rendering with different todo arrays
Test FilterControls rendering and state
Test conditional rendering (empty state, loading state)
Test form components for adding/editing todos

Custom Hooks

Test useTodos hook for CRUD operations
Test useFilter hook for filtering logic
Test useLocalStorage hook for persistence

Redux/State Management (if applicable)

Test reducers for all todo actions
Test action creators
Test selectors for filtered todos
Test async actions

Utility Functions

Test todo filtering functions
Test unique ID generation
Test date formatting
Test validation functions

Integration Tests (React Testing Library)

Component Interactions

Test adding a new todo and seeing it in the list
Test toggling todo completion status
Test editing a todo
Test deleting a todo
Test filtering todos by status

User Workflows

Test complete workflow: add, edit, complete, filter, delete
Test bulk operations (mark all complete, clear completed)
Test persistence between page reloads

End-to-End Tests (Cypress)

Critical User Journeys

Add multiple todos → mark some complete → filter by active/completed → clear completed
Create a todo → edit it → mark complete → delete it
Test that todos persist after page refresh

Error Handling

Test form validation (empty todos, max length)
Test handling duplicate todos (if implemented)
Test offline functionality (if implemented)

Accessibility Tests

Test keyboard navigation (tab through todos, use keyboard to complete/delete)
Test screen reader compatibility
Test ARIA attributes
Test color contrast for todo states

What to Test vs. What Not to Test
Do Test

✅ Component behavior based on props and state
✅ User interactions (clicks, typing, form submission)
✅ State changes after interactions
✅ Filtering and sorting logic
✅ CRUD operations on todos
✅ Persistence functionality
✅ Accessibility features
✅ Error states and validation

Don't Test

❌ Implementation details (private functions, component internals)
❌ Third-party libraries (React, Redux, etc.)
❌ CSS styling (unless critical for functionality)
❌ Browser API functionality (localStorage should be mocked)
❌ Static content that doesn't change
❌ React's internal rendering logic

Testing Best Practices

Focus on User Behavior

Test what the user sees and does
Use queries that reflect how users interact with the app
Prioritize testing user-facing functionality

Write Maintainable Tests

Use data-testid for complex selections
Prefer role, text, and label for accessibility
Don't tie tests to implementation details
Use testing library's recommended queries (getByRole over getByTestId when possible)

Follow Testing Hierarchy

More unit tests for core functionality
Focused integration tests for workflows
E2E tests for critical user journeys

Handle Async Properly

Wait for state updates properly
Use async/await and testing-library's waitFor
Mock timers for animations or delays

Use Mocks Strategically

Mock localStorage for persistence tests
Mock API calls if using a backend
Use Jest's mock functions for callbacks

Test Organization

Group tests by feature or component
Use descriptive test names
Follow the AAA pattern (Arrange, Act, Assert)

Deliverables

Test Suite

Complete coverage of all Todo app features
Well-organized test files
Appropriate mix of unit, integration, and E2E tests

Documentation

Testing strategy document explaining your approach
Setup instructions for running tests
Test coverage report

CI/CD Integration

GitHub Actions or similar CI pipeline
Automated test runs on PRs

Evaluation Criteria
Your submission will be evaluated on:

Comprehensiveness: How thoroughly you've tested the Todo application
Code Quality: Well-structured, readable, and maintainable tests
Strategy: Your choices about what and how to test
Best Practices: Following established testing conventions
Documentation: Clear explanation of your approach
Error Handling: Testing for failure cases
Accessibility: Ensuring the app works for all users

Project Requirements

1. Custom Hooks

Create a useTodos hook that:

Manages the todo state (loading, adding, toggling, deleting)
Handles persistence (localStorage or API)
Returns the todos array and relevant functions

Create a useFilter hook to handle todo filtering logic

2. Higher-Order Components

Create a withTodoTracking HOC that:

Wraps todo components to track user actions
Adds analytics/logging capabilities
Passes a tracking function to the wrapped component

3. Render Props

Implement a TodoFilter component using render props
Allow the parent component to control the rendering while the filter component provides the data and callbacks

4. Context API

Create a TodoContext to manage global state
Implement a reducer for predictable state updates
Create a context provider component
Create a custom hook to access the context

5. Component Composition

Break down your app into small, reusable components
Use composition to build more complex components
Create a clear component hierarchy

Implementation Tasks

Set up project structure

Create separate folders for components, hooks, context, and HOCs

Implement the core functionality

Todo creation, completion toggling, and deletion
Todo filtering (all, active, completed)
Persistence with localStorage

Add the advanced patterns one by one

Start with the context for global state
Extract logic into custom hooks
Implement component composition
Add the HOC for tracking
Implement the render props pattern for filtering

Style your application

Add basic CSS for a clean user interface

Suggested Component Structure

App.js - Main component using the Context Provider
TodoForm.js - For adding new todos
TodoList.js - Container for todo items
TodoItem.js - Individual todo with toggle and delete functionality
TodoFilter.js - Filtering using render props
TodoStats.js - Display counts of todos
