import { Property } from '../util';
import { Shader } from './shader';
/**
 * Multiplies each channel by a different factor
 */
declare class Channels extends Shader {
    factors: Property<{
        r?: number;
        b?: number;
        g?: number;
    }>;
    /**
     * @param factors - channel factors, each defaulting to 1
     */
    constructor(factors?: Property<Partial<{
        r: number;
        g: number;
        b: number;
    }>>);
}
export default Channels;