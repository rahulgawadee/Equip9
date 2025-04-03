// 2.Optimal Equipment Deal Matching (Heap/Priority Queue)


function matchEquip(requests, sellor) {
    const equipmentMapping = {};
        
        // Populate map 
    for (const [equipment, cost] of sellor) {
        if (!equipmentMapping[equipment]) {
        equipmentMapping[equipment] = [];
        }
        equipmentMapping[equipment].push(cost);
        }
        // sorting puropse
        for (const equipment in equipmentMapping) {
           equipmentMapping[equipment].sort((a, b) => a - b);
        }
        
        // buyer requests
        return requests.map(([equipment, maxPrice]) => {
            if (!equipmentMapping[equipment]) return null;
            
            for (let cost of equipmentMapping[equipment]) {
                if (cost <= maxPrice) return cost;
            }
            return null;
        });
    }
    // The  Output's here  : 
    const requests = [["excavator", 50000], ["bulldozer", 70000]];
    const sellor = [["excavator", 45000], ["bulldozer", 68000], ["excavator", 48000]];
    
    console.log(matchEquip(requests, sellor)); 