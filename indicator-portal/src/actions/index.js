import { CHANGE_VIZ_PANEL } from "../constants/action_types";
import {LINE_GRAPH, MULTI_LINE_GRAPH, BAR_GRAPH, GROUPED_BAR} from "../constants/graphTypes";

const Housing = { 
    title : "Housing",
    totalGraphs : 4,
    graphs: [{title : "Graph1", graphType : LINE_GRAPH, dataUrl : "data/apples.csv", rendered : false},
            {title : "Graph2", graphType : LINE_GRAPH, dataUrl : ""},
            {title : "Graph3", graphType : LINE_GRAPH, dataUrl : ""},
            {title : "Graph4", graphType : LINE_GRAPH, dataUrl : ""}]
    };
const Population_Demographics = { 
    title : "Population and Demographics",
    totalGraphs : 3,
    graphs: [{title : "Graph1", graphType : LINE_GRAPH, dataUrl : "data/apples.csv", rendered : false},
            {title : "Graph2", graphType : LINE_GRAPH, dataUrl : ""},
            {title : "Graph3", graphType : LINE_GRAPH, dataUrl : ""}]
};
const Households_Families_Youth = { 
    title : "Households, Families, and Youth",
    totalGraphs : 2,
    graphs: [{title : "Graph1", graphType : LINE_GRAPH, dataUrl : "data/apples.csv", rendered : false},
            {title : "Graph2", graphType : LINE_GRAPH, dataUrl : ""}]
};
const Income_Poverty = { 
    title : "Income and Poverty",
    totalGraphs : 1,
    graphs: [{title : "Graph1", graphType : LINE_GRAPH, dataUrl : "data/apples.csv", rendered : false}]
};
const Workforce = { 
    title : "Workforce",
    totalGraphs : 0
};
const Energy_Environment = { 
    title : "Energy and Environment",
    totalGraphs : 0
};
const Agriculture = { 
    title : "Agriculture",
    totalGraphs : 0
};

const Health = { 
    title : "Health",
    totalGraphs : 0
};
export const Menu_details = [];

Menu_details[0] = Housing;
Menu_details[1] = Population_Demographics;
Menu_details[2] = Households_Families_Youth;
Menu_details[3] = Income_Poverty;
Menu_details[4] = Workforce;
Menu_details[5] = Energy_Environment;
Menu_details[6] = Agriculture;
Menu_details[7] = Health;


export function changeVizPanel(panel) {
    return {
        type: CHANGE_VIZ_PANEL,
        payload : panel 
    }
}

