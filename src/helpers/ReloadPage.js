// denna används för att reloada sidan, det är ej optimal lösning men den löser problemet på kort sikt. 
export const ReloadPage = () => {
  document.location.reload(true);
};
