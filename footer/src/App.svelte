<script lang="ts">
  import { Router } from "svelte-navigator";

  import Footer from "../../www.unum.cloud/src/components/Footer/Footer.svelte";
  import { LINKS } from "../../header/src/links";

  import { applyTokens } from "../../www.unum.cloud/src/tokens/apply-tokens";
  import { createColorTokens } from "../../www.unum.cloud/src/tokens/color";
  import { createRadiusTokens } from "../../www.unum.cloud/src/tokens/radius";
  import { createSpacingTokens } from "../../www.unum.cloud/src/tokens/spacing";

  if (typeof document != "undefined") {
    const root = document.querySelector(":root");
    if (root) {
      applyTokens(root as HTMLElement, {
        ...createColorTokens(),
        ...createRadiusTokens(),
        ...createSpacingTokens(),
      });
    }
  }
</script>

<Router>
  <footer>
    <Footer links={LINKS} />
  </footer>
</Router>

<style lang="scss">
  :root {
    --transition-time: 500ms;
    --body-margin-side: var(--spacing-l);
    --header-margin-side: 0;

    --grid-columns: 4;
    --grid-gap: var(--spacing-l);

    --typography-h1: 1.75rem;
    --typography-h1-height: 2.375rem;
    --typography-h1-light: 1.75rem;
    --typography-h1-light-height: 2.375rem;
    --typography-h2: 1.25rem;
    --typography-h2-height: 1.875rem;
    --typography-h2-light: 1.25rem;
    --typography-h2-light-height: 1.875rem;
    --typography-h3: 1.125rem;
    --typography-h3-height: 1.875rem;
    --typography-h3-light: 1rem;
    --typography-h3-light-height: 1.5rem;
    --typography-h4: 1rem;
    --typography-subtitle: 1rem;
    --typography-subtitle-height: 1.5rem;
    --typography-body: 0.875rem;
    --typography-body-height: 1.5rem;
    --typography-body-2: 0.75rem;
    --typography-body-2-height: 1.125rem;
    --typography-body-3: 0.75rem;
    --typography-body-3-height: 1.125rem;
    --typography-body-4: 100rem;
    --typography-body-m: 0.875rem;
    --typography-body-m-height: 1.3125rem;
    --typography-body-2m: 0.75rem;
    --typography-body-2m-height: 1.125rem;
    --typography-body-3m: 0.75rem;
    --typography-body-3m-height: 1.125rem;
    --typography-caption: 0.875rem;
    --typography-caption-height: 1.125rem;
    --typography-caption-2: 0.75rem;
    --typography-caption-2-height: 1.125rem;
    --typography-caption-3: 0.625rem;
    --typography-caption-3-height: 0.9375rem;
    --typography-caption-4: 0.625rem;
    --typography-caption-4-height: 0.9375rem;
    --typography-code: 0.75rem;
    --typography-code-height: 1rem;
    --typography-link: 0.875rem;
  }

  @media screen and (min-width: 768px) {
    :root {
      --body-margin-side: var(--spacing-xxxxl);
      --header-margin-side: var(--spacing-xxxl);

      --grid-columns: 8;
      --grid-gap: var(--spacing-xl);

      --typography-h1: 2rem;
      --typography-h1-height: 3rem;
      --typography-h1-light: 2rem;
      --typography-h1-light-height: 2.5rem;
      --typography-h2: 1.75rem;
      --typography-h2-height: 2.375rem;
      --typography-h2-light: 1.75rem;
      --typography-h2-light-height: 2.375rem;
      --typography-h3: 1.25rem;
      --typography-h3-light: 1.25rem;
      --typography-h3-light-height: 1.875rem;
      --typography-h4: 100rem;
      --typography-subtitle: 1.125rem;
      --typography-subtitle-height: 1.6875rem;
      --typography-body: 1rem;
      --typography-body-height: 1.5rem;
      --typography-body-2: 0.875rem;
      --typography-body-2-height: 1.5rem;
      --typography-body-3: 0.75rem;
      --typography-body-3-height: 1.125rem;
      --typography-body-4: 0.625rem;
      --typography-body-m: 1rem;
      --typography-body-m-height: 1.5rem;
      --typography-body-2m: 0.875rem;
      --typography-body-2m-height: 1.3125rem;
      --typography-body-3m: 0.75rem;
      --typography-body-3m-height: 1.125rem;
      --typography-caption: 1rem;
      --typography-caption-2: 0.875rem;
      --typography-caption-2-height: 1.125rem;
      --typography-caption-3: 0.75rem;
      --typography-caption-3-height: 1.125rem;
      --typography-caption-4: 0.625rem;
      --typography-caption-4-height: 0.9375rem;
      --typography-code: 0.75rem;
      --typography-code-height: 1rem;
      --typography-link: 0.875rem;
    }
  }

  @media screen and (min-width: 1024px) {
    :root {
      --header-margin-side: 9.5rem;

      --grid-columns: 12;
    }
  }

  @media screen and (min-width: 1440px) {
    :root {
      --body-margin-side: 10rem;
    }
  }
</style>
