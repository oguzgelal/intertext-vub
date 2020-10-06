import type { IPackage } from './system/Package'
import type { IComponent } from './system/Component'

// Dictionary of all available packages
type Registry = {
  [key: string]: IPackage
}

// Components that should be
// rendered on the current screen
type Stage = [IComponent]

// Options to pass to a registry
type RegistryProps = {
  
  // subscribe to registry updates
  onRegistryUpdate?: (newRegistry: Registry) => void
  
  // subscribe to stage updates
  onStageUpdate?: (newStage: Stage) => void
}

interface IRegistryManager {
  insertPackages: (packages: [IPackage]) => void
}

class RegistryManager implements IRegistryManager {

  private registry: Registry
  private stage: Stage
  private props: RegistryProps

  constructor(props?: RegistryProps) {
    this.props = props;
  }

  // add a package into registry
  private registerPackage(pack: IPackage): void {
  }

  // stage a component for render
  private stageComponent(component: IComponent): void {
  }

  // insert package into registry manager
  insertPackages(packages: [IPackage]): void {
  }
}

export default RegistryManager;