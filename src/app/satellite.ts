export class Satellite {
  name: string;
  orbitType: string;
  type: string;
  operational: boolean;
  launchDate: string;
  static type: string;
  shouldShowWarning() {
      if (this.type === "Space Debris") {
       return true
      }
      else return false
  };

  constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean) {
  this.name = name, this.orbitType = orbitType, this.launchDate = launchDate, this.type = type, this.operational = operational;
  }

  
}