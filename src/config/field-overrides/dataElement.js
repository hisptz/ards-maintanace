export default new Map([
    ['aggregationLevels', {
        referenceType: 'organisationUnitLevel',
        fieldOptions: {},
    }],
    ['aggregationType', {
        fieldOptions: {
            options: [
                'SUM',
                'AVERAGE',
                'COUNT',
                'STDDEV',
                'VARIANCE',
                'MIN',
                'MAX',
                'FIRST',
                'LAST',
                'NONE',
                'AVERAGE_SUM_ORG_UNIT',
            ]
        }
    }],
    ['categoryCombo', {
        fieldOptions: {
            queryParamFilter: ['dataDimensionType:eq:DISAGGREGATION', 'name:eq:default'],
        },
    }],
]);
