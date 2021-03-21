<style global lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
	
	@layer base {
       
        h1 {
            @apply text-3xl
                    mb-4;
        }
        
        ul {
            @apply list-disc;
        }

        a[href]:not([tabindex='-1']),
        area[href]:not([tabindex='-1']),
        input:not([disabled]):not([tabindex='-1']),
        select:not([disabled]):not([tabindex='-1']),
        textarea:not([disabled]):not([tabindex='-1']),
        button:not([disabled]):not([tabindex='-1']),
        iframe:not([tabindex='-1']),
        [tabindex]:not([tabindex='-1']),
        [contentEditable=true]:not([tabindex='-1']) {
            @apply
            focus:outline-none 
            focus:ring 
            focus:border-blue-300;
        }

        a {
            @apply 
            underline 
            text-blue-400
            hover:text-red-400;
        }

        kbd {
            @apply
            bg-white
            rounded
            px-1
            shadow-kbd
            m-1
            text-lg
            font-bold
            tracking-wide;
        }
	}
</style>
