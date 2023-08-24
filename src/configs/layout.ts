const FEATURE = 'feature';
const FEATURE_COLLECTION = 'feature-collection';
const EXPLAINER = 'explainer';
const MULTI = 'multi';
const CAROUSEL = 'carousel';

export const layout = [
    {
        type: MULTI,
        key: 'improved',
        sections: ['interface', 'developer', 'fast'],
        subSections: {
            interface: [],
            developer: [],
            fast: ['refactor', 'happy', 'speed']
        }
    },
    {
        type: FEATURE,
        key: 'datatypes',
        index: '0'
    },
    {
        type: FEATURE,
        key: 'mashups',
        index: '1'
    },
    {
        type: FEATURE,
        key: 'context',
        index: '2'
    },
    {
        type: FEATURE,
        key: 'accessibility',
        index: '3'
    },
    {
        type: FEATURE,
        key: 'mobile',
        index: '4'
    },
    {
        type: FEATURE,
        key: 'storyramp',
        index: '5'
    },
    {
        type: FEATURE_COLLECTION,
        keys: ['implement', 'clipnship', 'plugins']
    },
    {
        type: EXPLAINER,
        key: 'main',
        sections: [
            ['accessible', 'responsive', 'plugins'],
            ['integrate', 'customizable', 'openSource']
        ]
    },
    {
        type: CAROUSEL,
        keys: ['cccs', 'cesi', 'openmaps', 'storylines', 'cam'],
        index: [1, 2, 3, 4, 5]
    }
];
