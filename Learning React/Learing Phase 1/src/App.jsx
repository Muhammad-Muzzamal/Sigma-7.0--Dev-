import Card from "./components/Card";
import Navbar from "./components/Navbar";
import "./index.css";
function App() {
  return (
    <>
      <Navbar />
      <section className="flex flex-wrap">
        <Card
          title="Laptop"
          price={100000}
          features={["Hi-tech", "reliable"]}
        />
        <Card title="Mobile" price={40000} features={["Hi-tech", "reliable"]} />
        <Card title="Pen" price={40} features={["Hi-tech", "reliable"]} />
      </section>
    </>
  );
}

export default App;
