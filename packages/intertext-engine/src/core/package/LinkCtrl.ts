import type { IPackage } from '../../system/Package';
import type { ILink } from '../../system/Link';
import type RegistryManager from '../registry/RegistryManager';
import type StageManager from '../stage/StageManager';

class LinkCtrl {

  static is = (pack: IPackage) => {
    return pack.isLink;
  }

  static invalidate = (link: ILink) => {
    const isLiteral = !link.hasOwnProperty('to');
    const hasValue = link.hasOwnProperty('value');

    // links has to have an id
    if (!link.id) return true;

    // invalidate if a link is a literal, but has no value
    if (isLiteral && !hasValue) return true;

    return false;
  }

  static  isHit = (link: ILink, registry: RegistryManager) => {

    // link from package isnt present
    if (!registry.exists(link.from)) return false;
    
    // link to package isnt present
    if (!registry.exists(link.to)) return false;

    return true;
  };

  static handle = (
    link: ILink,
    registry: RegistryManager,
    stage: StageManager,
  ) => {
    
    // insert into registry
    registry.insert(link)
    
    // remove package from the queue
    return true;
  }
}

export default LinkCtrl;