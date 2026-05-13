# README.md for One Twelve Project

# One Twelve Website

Welcome to the One Twelve website project! This project is designed to promote the brand One Twelve and its offerings in the track and field community. Below you will find information on the project structure, setup instructions, and how to contribute.

## Project Structure

The project is organized as follows:

```
one-twelve
├── public
│   └── fonts               # Custom font files used throughout the website
├── src
│   ├── app
│   │   ├── about           # About page content
│   │   │   └── page.tsx
│   │   ├── coaching-and-camps # Information about camps and coaching services
│   │   │   └── page.tsx
│   │   ├── journals        # Promotion of pole vault logbook and coaches box
│   │   │   └── page.tsx
│   │   ├── tools           # Tools offered by One Twelve
│   │   │   ├── coaches-box # Coaches Box app promotion
│   │   │   │   └── page.tsx
│   │   │   └── departsmart  # DepartSmart tool promotion
│   │   │       └── page.tsx
│   │   ├── globals.css     # Global CSS styles
│   │   ├── layout.tsx      # Layout structure for the application
│   │   └── page.tsx        # Main entry point for the application
│   ├── components          # Reusable components
│   │   ├── layout          # Layout components (Footer, Nav, NavDropdown)
│   │   │   ├── Footer.tsx
│   │   │   ├── Nav.tsx
│   │   │   └── NavDropdown.tsx
│   │   ├── sections        # Section components (Hero, ProductCategorySection)
│   │   │   ├── Hero.tsx
│   │   │   └── ProductCategorySection.tsx
│   │   └── ui              # UI components (Badge, Button, Card, Link)
│   │       ├── Badge.tsx
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       └── Link.tsx
│   ├── lib                 # Utility functions
│   │   └── utils.ts
│   └── tokens              # Color tokens and CSS variables
│       ├── colors.ts
│       └── tokens.css
├── next.config.ts          # Next.js configuration
├── package.json            # Project dependencies and scripts
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── README.md               # Project documentation
```

## Setup Instructions

To get started with the One Twelve website project, follow these steps:

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd one-twelve
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the development server:**
   ```
   npm run dev
   ```

4. **Open your browser and navigate to:**
   ```
   http://localhost:3000
   ```

## Development Guidelines

- **Component Structure:** Use reusable components to maintain consistency across the website. Follow the structure outlined in the `src/components` directory.
- **Styling:** Utilize Tailwind CSS for styling. Refer to the `src/tokens/colors.ts` for color tokens and ensure adherence to the brand's aesthetic direction.
- **Responsive Design:** Ensure that all components are mobile-friendly and adhere to responsive design principles.
- **Accessibility:** Follow accessibility best practices to ensure the website is usable for all visitors.

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

---

Thank you for your interest in the One Twelve website project! We hope you enjoy building and contributing to this initiative.