import type { Dictionary } from "@/i18n/dictionaries";
import { PixelStar } from "@/shared/components/ui/digital-decor";
export function AppFooter({ dictionary }: { dictionary: Dictionary }) {
  return (
    <footer className="site-footer">
      <div className="container">
        <span>
          Devtionary <PixelStar variant="small" />
        </span>
        <p>{dictionary.footer}</p>
      </div>
    </footer>
  );
}
