const fs = require("fs"),
// eslint-disable-next-line no-unused-vars
    NEWADDITIONS = [
        ["Frederik Scheer, Seneschal", "Frederik Scheer, Seneschal"],
        ["Agnes Bellanger", "Agnes Bellanger"],
        ["Mylene 'the Puck' Hamelin", "Mylene 'the Puck' Hamelin"],
        ["Lord Oswald of York", "Agnes Bellanger"]
    ],
    rawKUMUDATA = fs.readFileSync("kumu-eunomiac-vampire-toronto-by-night.json"),
    KUMUDATA = JSON.parse(rawKUMUDATA),
    duplicateLabelCheck = (dataSet) => {
        const [labelLog, dupedLabels] = [ [], [] ]
        let elementCount = 0
        for (const element of dataSet) {
            elementCount++
            if ("attributes" in element && "label" in element.attributes) 
                if (labelLog.includes(element.attributes.label))
                    dupedLabels.push(`   ${elementCount}: ${element.attributes.label}`)
                else
                    labelLog.push(element.attributes.label)
        }
        console.log(`${elementCount} Elements Checked...`)
        if (dupedLabels.length)
            console.log(`${dupedLabels.length} Duplicate Labels found:\n\n${dupedLabels.join("\n")}`)
        else
            console.log("No duplicate labels found in data set!")
    },
    duplicatePropertyCheck = (dataSet) => {
        const dupeLog = []
        let elementCount = 0
        for (const element of dataSet) {
            elementCount++
            if ("attributes" in element) {
                const attrPairs = Object.entries(element.attributes)
                for (const [, val] of attrPairs) {
                    const matchingPairs = attrPairs.filter(x => x[1] === val)
                    if (matchingPairs.length > 1) {
                        const logLine = `  ${elementCount}: "${element.attributes.label}" --- '${val}' found in ${matchingPairs.map(x => x[0]).join(", ")}`
                        if (!dupeLog.includes(logLine))
                            dupeLog.push(logLine)
                    }
                }
            }
        }
        console.log(`${elementCount} Elements Checked...`)
        if (dupeLog.length)
            console.log(`${dupeLog.length} Duplicate Values found:\n\n${dupeLog.join("\n")}`)
        else
            console.log("No duplicate values found in data set!")

    },
    attributeVerification = (dataSet) => {
        const badAttrLog = []
        let elementCount = 0        
        for (const element of dataSet) {
            elementCount++
            if ("attributes" in element) {
                const elemProps = Object.keys(element.attributes),
                    typeKey = elemProps.find(x => x.endsWith(" type"))
                if (typeKey) {
                    const elemType = element.attributes[typeKey].toLowerCase()
                    if (elemType in KUMUDATA.attributeRelevance) {
                        const validAttrs = [
                            ...KUMUDATA.attributeRelevance[elemType].map(x => x.toLowerCase()),
                            "label",
                            "element type",
                            "connection type",
                            "tags"
                        ]
                        if (validAttrs && validAttrs.length) {
                            const badAttrs = elemProps.filter(x => !validAttrs.includes(x))
                            if (badAttrs.length)
                                badAttrLog.push(`  ${elementCount}: "${element.attributes.label}" --- [${badAttrs.join(", ")}]`)
                        } else {
                            badAttrLog.push(`ERROR:  ${elementCount}: "${element.attributes.label}" --- No Valid Attrs for Type '${elemType}'`)
                        }
                    } else {
                        badAttrLog.push(`ERROR:  ${elementCount}: "${element.attributes.label}" --- Type Not Found for '${elemType}'`)
                    }
                } else {
                    badAttrLog.push(`ERROR:  ${elementCount}: "${element.attributes.label}" --- No Type Key Found!`)
                }
            } else {
                badAttrLog.push(`ERROR:  ${elementCount}: Attributes Not Found!\n\n${JSON.stringify(element)}`)
            }
        }
        console.log(`${elementCount} Elements Checked...`)
        if (badAttrLog.length)
            console.log(`${badAttrLog.length} Problems found:\n\n${badAttrLog.join("\n")}`)
        else
            console.log("Everything OK!")
    },
    getElementIDs = () => KUMUDATA.elements.map(x => x._id),
    getElementsByID = () => {
        const elemsByID = {}
        for (const element of KUMUDATA.elements)
            elemsByID[element._id] = element
        return elemsByID
    },
    getElemArray = () => KUMUDATA.elements.map(x => [x._id, x.attributes.label, x]).sort((a,b) => a[1].toUpperCase() < b[1].toUpperCase() ? -1 : 1),
    displayElementsByID = () => console.log(getElemArray().map(x => `${x[0]}   ${x[1]}`).join("\n")),
    getElementsByMap = () => {
        const elemArray = getElemArray(),
            elemsByMap = {}          
        for (const mapData of KUMUDATA.maps) {
            const mapName = mapData.name,
                mapID = mapData._id
            elemsByMap[mapID] = {
                id: mapID,
                name: mapName,
                elements: []
            }
            for (const elem of mapData.elements) {
                const elemData = elemArray.find(x => x[0] === elem.element)
                if (elemData)
                    elemsByMap[mapID].elements.push(elemData)
            }
        }
        return elemsByMap
    },
    displayElementsByMap = () => {
        const elemsByMap = getElementsByMap(),
            displayLines = []
        for (const mapData of Object.values(elemsByMap)) {
            displayLines.push(`\nMAP: ${mapData.name} (${mapData.id})\n`)
            const sortedElements = mapData.elements.sort((a,b) => a[1].toUpperCase() < b[1].toUpperCase() ? -1 : 1)
            for (const elemData of mapData.elements)
                displayLines.push(`   ${elemData[0]}   ${elemData[1]}`)
        }
        console.log(displayLines.join("\n"))
    },
    checkMapElements = () => {
        const elemIDs = getElementIDs(),
            mapElements = [...KUMUDATA.maps[0].elements],
            mapElemIDs = mapElements.map(x => x.element),
            errorLog = []
        for (let i = 0; i < mapElemIDs.length; i++) {
            const id = mapElemIDs[i]
            if (!elemIDs.includes(id))
                errorLog.push(`ID '${id}' Not Found!`)
        }        
        console.log(`${mapElemIDs.length} Elements Checked...`)
        if (errorLog.length)
            console.log(`${errorLog.length} Problems found:\n\n${errorLog.join("\n")}`)
        else
            console.log("Everything OK!")
    },
    createElementTwins=(mapID)=>{
        const elemArray = getElemArray(),
            elemIDs = elemArray.map(x => x[0]),
            mapIndex = KUMUDATA.maps.findIndex(x => x._id === mapID),
            randomIDString = () => [1,2,3,4,5,6,7,8].map(() => "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split("")[Math.floor(Math.random()*61)]).join("") // new Array(8).map(() => "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split("")[Math.floor(Math.random()*61)]).join("")

        if (KUMUDATA.maps[mapIndex]) 
            for (let i = 0; i < NEWADDITIONS.length; i++) {
                // Construct new element ID
                let newID = `elem-${randomIDString()}`
                while (elemIDs.includes(newID))
                    newID = `elem-${randomIDString()}`
                // Convert pairs into two pairs: [newID, newLabel], [refID, refLabel]
                const [newLabel, refLabel] = NEWADDITIONS[i],
                    [refID,,refElem] = elemArray.find(x => x[1] === refLabel),
                // Construct new element:
                    newElem = {
                        _id: newID,
                        attributes: Object.assign({}, refElem.attributes)
                    }
                newElem.attributes.label = newLabel
                KUMUDATA.elements.push(newElem)
                // If OLD ID exists on target map, replace it with new one; otherwise, add new one.
                const mapElements = KUMUDATA.maps[mapIndex].elements,
                    existingElementIndex = mapElements.findIndex(x => x.element === refID)
                if (existingElementIndex > -1)
                    KUMUDATA.maps[mapIndex].elements[existingElementIndex].element = newID
                else
                    KUMUDATA.maps[mapIndex].elements.push({
                        _id: `node-${randomIDString()}`,
                        position: {
                            x: -200 + Math.floor(Math.random()*400),
                            y: -1500 + Math.floor(Math.random()*400)
                        },
                        pinned: true,
                        element: newID
                    })                   
            }        

        console.log("NEW MAP DATA WRITTEN")

        outputJSONFile()

    },
    outputJSONFile = () => {
        const JSONdata = JSON.stringify(KUMUDATA, null, 4)
        fs.renameSync("kumu-eunomiac-vampire-toronto-by-night.json", "kumu-eunomiac-vampire-toronto-by-night BACKUP.json")
        fs.writeFile("kumu-eunomiac-vampire-toronto-by-night.json", JSONdata, "utf-8", () => {
            console.log("File Write Complete!")
        })
    }

// duplicateLabelCheck(KUMUDATA.elements)
// duplicatePropertyCheck(KUMUDATA.elements)
// attributeVerification(KUMUDATA.elements)

// duplicateLabelCheck(KUMUDATA.connections)
// duplicatePropertyCheck(KUMUDATA.connections)
// attributeVerification(KUMUDATA.connections)

// checkMapElements()

// outputJSONFile()

createElementTwins("map-0GnSj7yu")

// displayElementsByMap()