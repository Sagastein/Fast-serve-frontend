import underdevimg from "../assets/underdev.svg";
function UnderDev() {
  return (
    <main className="w-11/12 grid  my-12 mx-auto place-content-center">
      <h1 className="text-5xl leading-[6rem]">
        This Feature Is Under Development
        <strong className="text-6xl">🚧</strong>
      </h1>
      <img className="h-72  mx-auto" src={underdevimg} alt="underdevimg" />
    </main>
  );
}

export default UnderDev;
