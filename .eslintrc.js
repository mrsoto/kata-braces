module.exports = {
    "extends": "standard",
    "plugins": [
        "standard",
        "node",
        "jasmine"
    ],
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
    },
    "env": {
        "browser": false,
        "node": true,
        "jasmine": true
    },
    "rules":{
        "semi": ["error", "always"],
        "comma-dangle": ["error", {
            "arrays": "always",
            "objects": "always",
            "imports": "always",
            "exports": "always",
            "functions": "ignore",
        }],
        "padded-blocks": [ "Error", {
            "blocks": "never",
            "switches": "never",
        }]
    }
};