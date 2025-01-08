const numberFormatter = new Intl.NumberFormat("en",{notation:"compact"})

export default function formatNumber(number:number){
  return numberFormatter.format(number)
}