import css from "./Loader.module.css";

export default function Loader() {
  return <div className={css.spinner} aria-label="Loading movies" />;
}