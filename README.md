# Portfolio Website

A modern, responsive portfolio website built with Next.js 14, featuring a dark mode, smooth animations, and a showcase of projects.

## Features

- 🌓 Dark mode
- ⚡️ Next.js 15 for optimal performance
- 🎨 Tailwind CSS for styling
- 🧩 shadcn/ui components
- 💫 Framer Motion animations
- 📱 Fully responsive design
- 🎯 SEO optimized
- 🚀 Fast page loads
- 🧪 TypeScript for type safety

## Tech Stack

- [Next.js 14](https://nextjs.org/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Framer Motion](https://www.framer.com/motion/)

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/jontay999/portfolio-site.git
cd portfolio-site
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Deployment

### Deploy on Vercel (Recommended)

The easiest way to deploy this portfolio is to use the [Vercel Platform](https://vercel.com).

1. Push your code to a GitHub repository.
2. Go to [Vercel](https://vercel.com/new) and sign up with GitHub.
3. Click "Import Project" and select your repository.
4. Vercel will automatically detect Next.js and configure the build settings.
5. Click "Deploy" and wait for your site to be deployed.

Your site will be automatically deployed on every push to the main branch.

#### Environment Variables

If you've added any environment variables to your project:
1. Go to your project settings in Vercel
2. Navigate to the "Environment Variables" tab
3. Add each variable from your `.env` file

### Custom Domain (Optional)

1. Go to your project settings in Vercel
2. Navigate to the "Domains" tab
3. Add your custom domain
4. Follow Vercel's instructions to configure your DNS settings

## Project Structure

```
portfolio-site/
├── src/
│   ├── app/             # Next.js app directory
│   ├── components/      # React components
│   │   ├── ui/         # Reusable UI components
│   │   └── ...         # Other components
│   ├── lib/            # Utility functions
│   └── types/          # TypeScript types
├── public/             # Static assets
└── ...                 # Config files
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
