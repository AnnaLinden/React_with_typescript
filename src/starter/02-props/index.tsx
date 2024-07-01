type ComponentProps = {name: string, id: number, children?: React.ReactNode };

function Component({name, id, children}: ComponentProps) {
  return (
    <div>
      <h1>Name: {name}</h1>
      <h2>Id: {id}</h2>
      {children}
    </div>
  );
}
export default Component;
