// CI 資料模擬 - 模擬從 CMDB 或 API 獲取
var ciData = [
    {
        id: "server-001",
        name: "生產伺服器 A",
        type: "伺服器",
        icon: "fas fa-server",
        status: "Online",
        location: "資料中心 - 機櫃 1",
        ipAddress: "192.168.1.100",
        os: "Linux Ubuntu 22.04",
        cpu: "Intel Xeon E3-1505M v5",
        ram: "32GB DDR4",
        storage: "1TB SSD",
        owner: "IT 部門",
        lastMaintenance: "2025-06-20",
        notes: "負責核心應用程式運行",
        relatedCIs: [
            { id: "network-switch-001", name: "核心交換機 1", type: "網路設備" },
            { id: "storage-array-001", name: "儲存陣列 A", type: "儲存設備" }
        ],
        relatedPersons: [
            { id: "person-001", name: "林義新", type: "人員" }
        ]
    },
    {
        id: "laptop-005",
        name: "業務筆電 B",
        type: "筆電",
        icon: "fas fa-laptop",
        status: "Offline",
        location: "業務部",
        ipAddress: "192.168.1.105",
        os: "Windows 10 Pro",
        cpu: "Intel Core i7-1165G7",
        ram: "16GB DDR4",
        storage: "512GB SSD",
        owner: "張小明",
        lastMaintenance: "2025-05-10",
        notes: "用於客戶拜訪和演示",
        relatedCIs: [],
        relatedPersons: [
            { id: "person-002", name: "張小明", type: "人員" }
        ]
    },
    {
        id: "printer-002",
        name: "行政印表機",
        type: "印表機",
        icon: "fas fa-print",
        status: "Maintenance",
        location: "行政部",
        ipAddress: "N/A",
        os: "N/A",
        cpu: "N/A",
        ram: "N/A",
        storage: "N/A",
        owner: "行政部",
        lastMaintenance: "2025-07-01",
        notes: "正在進行墨水匣更換",
        relatedCIs: [],
        relatedPersons: []
    },
    {
        id: "person-001",
        name: "林義新",
        type: "人員",
        icon: "fas fa-user",
        status: "Active",
        location: "IT 部門",
        ipAddress: "N/A",
        os: "N/A",
        cpu: "N/A",
        ram: "N/A",
        storage: "N/A",
        owner: "HR 部門",
        lastMaintenance: "N/A",
        notes: "IT 系統管理員",
        relatedCIs: [
            { id: "server-001", name: "生產伺服器 A", type: "伺服器" },
            { id: "network-switch-001", name: "核心交換機 1", type: "網路設備" }
        ],
        relatedPersons: []
    },
    {
        id: "person-002",
        name: "張小明",
        type: "人員",
        icon: "fas fa-user",
        status: "Active",
        location: "業務部",
        ipAddress: "N/A",
        os: "N/A",
        cpu: "N/A",
        ram: "N/A",
        storage: "N/A",
        owner: "HR 部門",
        lastMaintenance: "N/A",
        notes: "業務經理",
        relatedCIs: [
            { id: "laptop-005", name: "業務筆電 B", type: "筆電" }
        ],
        relatedPersons: []
    }
];

// 模擬相關請求單資料
var relatedRequestsData = {
    "server-001": [
        { id: "REQ-2025-001", subject: "生產伺服器 A 效能問題", status: "處理中" },
        { id: "REQ-2025-005", subject: "生產伺服器 A 儲存擴容", status: "已完成" }
    ],
    "laptop-005": [
        { id: "REQ-2025-002", subject: "筆電 B 無法開機", status: "已解決" }
    ],
    "person-001": [
        { id: "REQ-2025-003", subject: "林義新帳號權限申請", status: "已批准" }
    ]
};




