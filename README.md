# Ascend Agency Pricing Page

This project is a React-based web application designed to display a pricing table for different publication options. The UI is styled with Tailwind CSS.
## Features

- **Table Component**: A flexible and reusable table component that can be used across different tabs.
- **Custom Color Scheme**: The UI follows a specific color palette to maintain a consistent and visually appealing design.
- **Responsive Design**: The layout is responsive and adapts to different screen sizes.
- **Filter and Search**: Users can filter publications by name, price, region, and genre.

## Installation

1. **Clone the repository**:

    ```bash
    git clone https://github.com/mahnoor-zamir/Ascend-Agency.git
    cd Ascend-Agency
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

3. **Run the development server**:

    ```bash
    npm run dev
    ```

4. **Build for production**:

    ```bash
    npm run build
    ```

5. **Preview the production build**:

    ```bash
    npm run preview
    ```

## Custom Color Palette

The application uses a custom color scheme to ensure brand consistency:

- **Background**:
  - Greyish background: `#f0f4f7`
  - White background: `#ffffff`

- **Accent Colors**:
  - Active elements (Red): `#ef3e36`
  - Tab hover (Pink): `#f3dbdc`
  - Price range bar: `#ea8e8c`
  - Genre buttons and tabs: `#6e6e6e`

## Usage

- **Reusable Table Component**:
  - The table component can be imported and used across different parts of the application. It accepts props to handle data, styles, and interactions.
  
- **Filtering and Sorting**:
  - The table provides filtering options by publication name, price range, region, and genre. The sorting functionality is available for price and publication name.

## Contributing

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-branch-name`
3. Make your changes and commit them 
4. Push to the branch: `git push origin feature-branch-name`
5. Submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Tailwind CSS](https://tailwindcss.com/)
- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
