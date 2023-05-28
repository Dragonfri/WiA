import { findWifiByName } from "./sectionsFind";

export function extract_data(data) {
    let sec = data.RESULT;
    let sections = new Array(10);
    sections[0] = new Array(11);
    sections[1] = new Array(6);
    sections[2] = new Array(14);
    sections[3] = new Array(8);
    sections[4] = new Array(8);
    sections[5] = new Array(2);
    sections[6] = new Array(7);
    sections[7] = new Array(5);
    sections[8] = new Array(7);
    sections[9] = new Array(4);
    
    sections[0][0] = findWifiByName(sec, "중앙도서관-1F-104H-0005-121").client;
    sections[0][1] = findWifiByName(sec, "중앙도서관-1F-104H-0009-121").client;
    sections[0][2] = findWifiByName(sec, "중앙도서관-1F-104H-0006-121").client;
    sections[0][3] = findWifiByName(sec, "중앙도서관-1F-104H-0007-121").client;
    sections[0][4] = findWifiByName(sec, "중앙도서관-1F-104H-0008-121").client;
    sections[0][5] = findWifiByName(sec, "중앙도서관-1F-104H-0010-121").client;
    sections[0][6] = findWifiByName(sec, "중앙도서관-1F-104H-0011-121").client;
    sections[0][7] = findWifiByName(sec, "중앙도서관-1F-104H-0012-121").client;
    sections[0][8] = findWifiByName(sec, "중앙도서관-1F-104H-0013-121").client;
    sections[0][9] = findWifiByName(sec, "중앙도서관-1F-104H-0014-121").client;
    sections[0][10] = findWifiByName(sec, "중앙도서관-1F-104H-0015-121").client;
  
    sections[1][0] = findWifiByName(sec, "중앙도서관-1F-107H-0018-121").client;
    sections[1][1] = findWifiByName(sec, "중앙도서관-1F-107H-0019-121").client;
    sections[1][2] = findWifiByName(sec, "중앙도서관-1F-107H-0020-121").client;
    sections[1][3] = findWifiByName(sec, "중앙도서관-1F-107H-0021-121").client;
    sections[1][4] = findWifiByName(sec, "중앙도서관-1F-107H-0022-121").client;
    sections[1][5] = findWifiByName(sec, "중앙도서관-1F-107H-0023-121").client;
  
    sections[2][0] = findWifiByName(sec, "중앙도서관-2F-207H-0048-121").client;
    sections[2][1] = findWifiByName(sec, "중앙도서관-2F-207H-0049-121").client;
    sections[2][2] = findWifiByName(sec, "중앙도서관-2F-207H-0050-121").client;
    sections[2][3] = findWifiByName(sec, "중앙도서관-2F-207H-0051-121").client;
    sections[2][4] = findWifiByName(sec, "중앙도서관-2F-207H-0052-121").client;
    sections[2][5] = findWifiByName(sec, "중앙도서관-2F-207H-0053-121").client;
    sections[2][6] = findWifiByName(sec, "중앙도서관-2F-207H-0054-121").client;
    sections[2][7] = findWifiByName(sec, "중앙도서관-2F-207H-0055-121").client;
    sections[2][8] = findWifiByName(sec, "중앙도서관-2F-207H-0056-121").client;
    sections[2][9] = findWifiByName(sec, "중앙도서관-2F-207H-0057-121").client;
    sections[2][10] = findWifiByName(sec, "중앙도서관-2F-207H-0058-121").client;
    sections[2][11] = findWifiByName(sec, "중앙도서관-2F-207H-0060-121").client;
    sections[2][12] = findWifiByName(sec, "중앙도서관-2F-207H-0059-121").client;
    sections[2][13] = findWifiByName(sec, "중앙도서관-2F-207H-0061-121").client;
  
    sections[3][0] = findWifiByName(sec, "중앙도서관-2F-201H-0035-121").client;
    sections[3][1] = findWifiByName(sec, "중앙도서관-2F-201H-0036-121").client;
    sections[3][2] = findWifiByName(sec, "중앙도서관-2F-201H-0037-121").client;
    sections[3][3] = findWifiByName(sec, "중앙도서관-2F-201H-0038-121").client;
    sections[3][4] = findWifiByName(sec, "중앙도서관-2F-201H-0039-121").client;
    sections[3][5] = findWifiByName(sec, "중앙도서관-2F-201H-0040-121").client;
    sections[3][6] = findWifiByName(sec, "중앙도서관-2F-201H-0041-121").client;
    sections[3][7] = findWifiByName(sec, "중앙도서관-2F-201H-0042-121").client;
  
    sections[4][0] = findWifiByName(sec, "중앙도서관-2F-204H-0043-121").client;
    sections[4][1] = findWifiByName(sec, "중앙도서관-2F-204H-0044-121").client;
    sections[4][2] = findWifiByName(sec, "중앙도서관-2F-201H-0030-121").client;
    sections[4][3] = findWifiByName(sec, "중앙도서관-2F-201H-0031-121").client;
    sections[4][4] = findWifiByName(sec, "중앙도서관-2F-201H-0032-121").client;
    sections[4][5] = findWifiByName(sec, "중앙도서관-2F-201H-0029-121").client;
    sections[4][6] = findWifiByName(sec, "중앙도서관-2F-201H-0033-121").client;
    sections[4][7] = findWifiByName(sec, "중앙도서관-2F-201H-0034-121").client;
    
    sections[5][0] = findWifiByName(sec, "중앙도서관-3F-302H-0062-121").client;
    sections[5][1] = findWifiByName(sec, "중앙도서관-3F-302H-0063-121").client;
    
    sections[6][0] = findWifiByName(sec, "중앙도서관-4F-401H-0072-121").client;
    sections[6][1] = findWifiByName(sec, "중앙도서관-4F-401H-0073-121").client;
    sections[6][2] = findWifiByName(sec, "중앙도서관-4F-401H-0074-121").client;
    sections[6][3] = findWifiByName(sec, "중앙도서관-4F-401H-0075-121").client;
    sections[6][4] = findWifiByName(sec, "중앙도서관-4F-401H-0076-121").client;
    sections[6][5] = findWifiByName(sec, "중앙도서관-4F-401H-0077-121").client;
    sections[6][6] = findWifiByName(sec, "중앙도서관-4F-401H-0078-121").client;
    
    sections[7][0] = findWifiByName(sec, "중앙도서관-4F-406H-0082-121").client;
    sections[7][1] = findWifiByName(sec, "중앙도서관-4F-406H-0083-121").client;
    sections[7][2] = findWifiByName(sec, "중앙도서관-4F-406H-0084-121").client;
    sections[7][3] = findWifiByName(sec, "중앙도서관-4F-406H-0085-121").client;
    sections[7][4] = findWifiByName(sec, "중앙도서관-4F-406H-0086-121").client;
    
    sections[8][0] = findWifiByName(sec, "중앙도서관-5F-501H-0088-121").client;
    sections[8][1] = findWifiByName(sec, "중앙도서관-5F-501H-0089-121").client;
    sections[8][2] = findWifiByName(sec, "중앙도서관-5F-501H-0090-121").client;
    sections[8][3] = findWifiByName(sec, "중앙도서관-5F-501H-0091-121").client;
    sections[8][4] = findWifiByName(sec, "중앙도서관-5F-501H-0092-121").client;
    sections[8][5] = findWifiByName(sec, "중앙도서관-5F-501H-0093-121").client;
    sections[8][6] = findWifiByName(sec, "중앙도서관-5F-501H-0094-121").client;
    
    sections[9][0] = findWifiByName(sec, "중앙도서관-5F-503H-0096-121").client;
    sections[9][1] = findWifiByName(sec, "중앙도서관-5F-503H-0097-121").client;
    sections[9][2] = findWifiByName(sec, "중앙도서관-5F-503H-0098-121").client;
    sections[9][3] = findWifiByName(sec, "중앙도서관-5F-503H-0099-121").client;
  
    return sections;
  }