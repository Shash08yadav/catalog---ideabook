# Catalog - A directory of Ideas

> Learning NEXT.js 15 with React 19

## New to Learn

1. `package.json`

```json
    "packageManager" : "npm@10.5.2",
    "overrides" : {
        "react" : "$react",
        "react-dom" : "$react-dom"
    }
```

2. `component/Navbar.tsx`

   ```tsx
   // Forms now allow to use server actions for async actions
   <form
     action={async () => {
       "use server";

       await signOut({ redirectTo: "/" });
     }}
   >
     <button type="submit">
       <span className="max-sm:hidden">Logout</span>
       <LogOut className="size-6 sm:hidden text-red-500" />
     </button>
   </form>
   ```

## Technologies

1. React 19
2. Next.js 15 {Major-Focus}
3. Tailwind CSS
4. Typescript
5. Shadcn UI (Updating for Next.js 15)
6. Sanity.io

## Packages

1. [Auth.js](https://authjs.dev/)

   - Design Authentication from Scratch
   - Providers : [ Github ]
   - [Explained](https://youtu.be/Zq5fmkH0T78?si=eUhiSrfd7EHcenm4&t=5226)

2. [Tailwind-Animate](https://www.npmjs.com/package/tailwindcss-animate)

   - Tailwind CSS Animations

3. [Tailwind-Typography](https://github.com/tailwindlabs/tailwindcss-typography)
   - Tailwind CSS Typography, prose and headings
