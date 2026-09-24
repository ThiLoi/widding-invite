import { useEffect, useRef, useState } from "react";
import styles from "./Styles.module.css";

export function BackgroundParallax2() {
  const [offsetY, setOffsetY] = useState<number>(0);

  //  Adicione <HTMLDivElement> aqui
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      window.requestAnimationFrame(() => {
        if (!ref.current) return;
        // Agora o TypeScript sabe que ref.current é um elemento DIV e aceita o método
        const rect = ref.current.getBoundingClientRect();
        setOffsetY(rect.top * 0.15);
      });
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={ref} className={styles["parallax-wrapper"]}>
      <div
        className={styles["parallax-bg"]}
        style={{ transform: `translate3d(0, ${offsetY}px, 0)` }}
      />
      <div className={styles["parallax-content"]}></div>
    </div>
  );
}
