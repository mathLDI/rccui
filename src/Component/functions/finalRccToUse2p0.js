

const FinalRccToUse2p0 = ({
    RccTotalPercentageBasic2p0State,
    fromPercentageState,
    TopPercentageSelectorProps,
    BottomPercentageSelectorProps,
    LowerRccContaminant2p0Props,
    LowerRccContaminantWithBTW0To22p0Props,
    HigherPercentageContaminant2p0Props,
    HigherPercentageContaminantWithBTW0To22p0Props,
    RccToUsePerColumnWithpavedOrGravelSelected1Props,
    RccToUsePerColumnWithpavedOrGravelSelected2Props,
}) => {



    let result = "null";

    if (RccTotalPercentageBasic2p0State > 100) {
        result = true;
    } else if (RccTotalPercentageBasic2p0State <= 25) {
        result = 6;
    } else if (
        fromPercentageState === 1 &&
        RccToUsePerColumnWithpavedOrGravelSelected1Props !== -1
    ) {
        result = RccToUsePerColumnWithpavedOrGravelSelected1Props;
    } else if (
        fromPercentageState === 1 &&
        RccToUsePerColumnWithpavedOrGravelSelected2Props
        !== -1
    ) {
        result = RccToUsePerColumnWithpavedOrGravelSelected2Props;
    } else if (
        fromPercentageState === 1 &&
        RccToUsePerColumnWithpavedOrGravelSelected1Props === -1
    ) {
        result = "null";
    } else if (
        fromPercentageState === 1 &&
        RccToUsePerColumnWithpavedOrGravelSelected2Props
        === -1
        //code below doesnt seem to be called at any time!!//
    ) {
        result = "null";
    } else if (
        fromPercentageState === 2 &&
        TopPercentageSelectorProps > 25 &&
        BottomPercentageSelectorProps > 25
    ) {
        result = LowerRccContaminant2p0Props;
    } else if (
        (fromPercentageState === 2 &&
            TopPercentageSelectorProps > 25 &&
            BottomPercentageSelectorProps <= 25) ||
        (BottomPercentageSelectorProps > 25 && TopPercentageSelectorProps <= 25)
    ) {
        result = HigherPercentageContaminant2p0Props;
    } else if (
        fromPercentageState === 2 &&
        TopPercentageSelectorProps <= 25 &&
        BottomPercentageSelectorProps <= 25 &&
        TopPercentageSelectorProps !== BottomPercentageSelectorProps
    ) {
        result = HigherPercentageContaminantWithBTW0To22p0Props;
    } else if (
        fromPercentageState === 2 &&
        TopPercentageSelectorProps <= 25 &&
        BottomPercentageSelectorProps <= 25 &&
        TopPercentageSelectorProps === BottomPercentageSelectorProps
    ) {
        result = LowerRccContaminantWithBTW0To22p0Props;
    } else {
        result = "null";
    }

    return (

        result

    );
};

export default FinalRccToUse2p0;
