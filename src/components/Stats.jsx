import Stat from "./Stat"

const Stats = ({stats}) => {
  return (
    <section className="stats">
      <Stat number={stats.numberOfWords} label={"Words"} />
      <Stat number={stats.numberofCharacters} label={"Characters"} />
      <Stat number={stats.instagramCharactersLeft} label={"Instagram"} />
      <Stat number={stats.facebookCharactersLeft} label={"FACEBOOK"} />
    </section>
  );
};
export default Stats