export type FootballersType = {
  footballers: { name: string }[];
  handleAddFootballer: () => void;
};

export default function Footballer({
  footballers,
  handleAddFootballer,
}: FootballersType) {
  return (
    <div>
      <ul>
        {footballers?.map((footballer: { name: string }) => (
          <li>{footballer.name}</li>
        ))}
      </ul>
      <button onClick={handleAddFootballer}>Add Footballer</button>
    </div>
  );
}
