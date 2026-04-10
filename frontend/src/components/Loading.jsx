export default function Loading({ progress }) {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "4px",
        width: progress + "%",
        background: "cyan",
        transition: "0.3s",
        zIndex: 9999
      }}
    />
  );
}
