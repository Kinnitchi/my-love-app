const layoutStyle = {
  fontFamily: "Roboto, sans-serif",
};

export default function Layout({ children }) {
  return (
    <div style={layoutStyle} >
      {children}
    </div>
  );
}