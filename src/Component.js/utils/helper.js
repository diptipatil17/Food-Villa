
export function filterData(searchTxt,Allrestraunts)
{
     const filterData =Allrestraunts.filter((restraunt)=>
      restraunt?.info?.name?.toLowerCase().includes(searchTxt.toLowerCase()));
     return filterData;
}