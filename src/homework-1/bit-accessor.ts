type Bit = 0 | 1

interface BitAccessor<T extends Uint8Array> {
    getBit: (intIdx: T[number], bitPosition: number) => Bit
    setBit: (intIdx: T[number], bitPosition: number, bit: Bit) => void
    getByte: (intIdx: T[number]) => string
}

export function createBitAccessor<T extends Uint8Array>(
    intArray: T
): BitAccessor<T> {
    function validate(intIdx: T[number], bitPosition?: number) {
        if (intArray.length === 0) {
            throw new Error('The intArray is empty')
        }

        if (intIdx >= intArray.length || intIdx < 0) {
            throw new Error(`Index ${intIdx} out of range intArray`)
        }

        if (bitPosition !== undefined && (bitPosition < 0 || bitPosition > 7)) {
            throw new Error(
                `Bit index ${bitPosition} for ${intArray[intIdx]
                    .toString(2)
                    .padStart(8, '0')} out of range`
            )
        }
    }

    return {
        getBit(intIdx, bitPosition) {
            validate(intIdx, bitPosition)
            return ((intArray[intIdx] >> bitPosition) & 0b1) as Bit
        },

        setBit(intIdx, bitPosition, bit) {
            validate(intIdx, bitPosition)
            intArray[intIdx] = (
                bit
                    ? intArray[intIdx] | (0b1 << bitPosition)
                    : intArray[intIdx] & ~(0b1 << bitPosition)
            ) as Bit
        },

        getByte(intIdx) {
            validate(intIdx)
            return intArray[intIdx].toString(2).padStart(8, '0')
        },
    }
}
