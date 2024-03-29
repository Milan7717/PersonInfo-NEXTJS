const getPredicatedAge = async (name: string) => {
  const res = await fetch(`https://api.agify.io/?name=${name}`);
  return res.json();
};

const getPredicatedCountry = async (name: string) => {
  const res = await fetch(`https://api.nationalize.io/?name=${name}`);
  return res.json();
};

interface Params {
  params: {
    name: string;
  };
}

const page = async ({ params }: Params) => {
  const ageData = getPredicatedAge(params.name);
  const countryData = getPredicatedCountry(params.name);

  const [age, country] = await Promise.all([ageData, countryData]);
  return (
    <>
      <div>
        <div>Personal Info</div>
        <div>Age :{age?.age}</div>
        <div>Country :{country?.country[0]?.country_id}</div>
      </div>
    </>
  );
};

export default page;
