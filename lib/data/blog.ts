import type { BlogPost } from "@/types";

// Khai báo danh sách 13 hình ảnh
const IMGS = [
  "https://images.unsplash.com/photo-1653387319597-84bde7e5368e?fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000", // 1
  "https://images.unsplash.com/photo-1653387300291-bfa1eeb90e16?fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000", // 2
  "https://images.unsplash.com/photo-1687603849601-ef2bd73820cb?fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000", // 3
  "https://images.unsplash.com/photo-1653387141060-9a9834f47777?fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000", // 4
  "https://images.unsplash.com/photo-1685558589023-3297b012d8bc?fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000", // 5
  "https://images.unsplash.com/photo-1576836165612-8bc9b07e7778?fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000", // 6
  "https://images.unsplash.com/photo-1632125907246-204ae30864ca?fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000", // 7
  "https://images.unsplash.com/photo-1543966888-7c1dc482a810?fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000", // 8
  "https://images.unsplash.com/photo-1508317469940-e3de49ba902e?fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000", // 9
  "https://images.unsplash.com/photo-1726568313407-c7d9c8a8ce88?fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000", // 10
  "https://images.unsplash.com/photo-1719255417989-b6858e87359e?fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000", // Hình cũ 1
  "https://images.unsplash.com/photo-1698668975271-2ba9a323be6b?fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000", // Hình cũ 2
  "https://images.unsplash.com/photo-1653387319597-84bde7e5368e?fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000"  // Hình cũ 3
];

export const blogPosts: BlogPost[] = [
  {
    id: "js1",
    slug: "event-loop-microtask-macrotask",
    title: "Event Loop: Bóc tách cơ chế Microtask và Macrotask",
    excerpt: "Tại sao Promise luôn chạy trước setTimeout? Tìm hiểu thứ tự ưu tiên trong hàng đợi tác vụ của JavaScript Runtime.",
    date: "2025-01-05",
    category: "JavaScript",
    imageUrl: IMGS[0],
    content: `# Hiểu sâu về Event Loop trong JavaScript

JavaScript là ngôn ngữ đơn luồng (single-threaded), nhưng nó có thể xử lý các tác vụ bất đồng bộ một cách cực kỳ hiệu quả nhờ vào **Event Loop**.

## 1. Cơ chế hoạt động của các hàng đợi
Khi một tác vụ bất đồng bộ hoàn thành, nó không được thực thi ngay mà được đưa vào các hàng đợi:
- **Microtask Queue**: Chứa các tác vụ ưu tiên cực cao như \`Promise.then\`, \`MutationObserver\`, và \`queueMicrotask\`.
- **Macrotask Queue (Task Queue)**: Chứa các tác vụ như \`setTimeout\`, \`setInterval\`, \`setImmediate\` (Node.js), và các sự kiện UI.

## 2. Ví dụ thực thi phức tạp
Hãy xem đoạn code sau để hiểu thứ tự ưu tiên:

\`\`\`javascript
console.log("1. Đồng bộ");

setTimeout(() => {
  console.log("2. Macrotask (setTimeout)");
}, 0);

Promise.resolve().then(() => {
  console.log("3. Microtask 1 (Promise)");
}).then(() => {
  console.log("4. Microtask 2 (Promise chain)");
});

queueMicrotask(() => {
  console.log("5. Microtask 3 (Explicit)");
});

console.log("6. Kết thúc đồng bộ");
\`\`\`

**Thứ tự in ra:** \`1 -> 6 -> 3 -> 4 -> 5 -> 2\`.

## 3. Tại sao lại như vậy?
1. **Call Stack**: Thực thi code đồng bộ (\`1\` và \`6\`).
2. **Dọn dẹp Microtask**: Ngay sau khi Stack rỗng, Event Loop sẽ quét **hết sạch** Microtask Queue. Do đó \`3, 4, 5\` được in ra liên tục.
3. **Macrotask**: Chỉ sau khi Microtask Queue trống, Event Loop mới lấy **một** tác vụ từ Macrotask Queue (\`2\`) để chạy.

**Lưu ý quan trọng:** Nếu bạn tạo ra Microtask liên tục (ví dụ đệ quy Promise), bạn sẽ làm "đói" (starve) Macrotask Queue, khiến trình duyệt không thể render hoặc xử lý click chuột.`
  },

  {
    id: "js2",
    slug: "closure-thuc-chien-cache-private-state",
    title: "Closure: Từ biến Private đến Kỹ thuật Memoization",
    excerpt: "Closure không chỉ là lý thuyết suông. Hãy xem cách nó giúp bảo mật dữ liệu và tối ưu hóa hiệu năng ứng dụng.",
    date: "2025-01-12",
    category: "JavaScript",
    imageUrl: IMGS[1],
    content: `# Closure: "Bộ nhớ" của hàm số

Closure xảy ra khi một hàm bên trong tham chiếu đến các biến của hàm cha bên ngoài, ngay cả khi hàm cha đã thực thi xong.

## 1. Tạo biến Private (Encapsulation)
Trong JS cũ, chúng ta không có từ khóa \`private\`. Closure là giải pháp duy nhất.

\`\`\`javascript
function createBankCard() {
  let pin = "1234"; // Biến này không thể truy cập từ bên ngoài
  let balance = 1000;

  return {
    withdraw: function(inputPin, amount) {
      if (inputPin === pin && amount <= balance) {
        balance -= amount;
        return \`Rút thành công \${amount}. Còn lại: \${balance}\`;
      }
      return "Giao dịch thất bại!";
    }
  };
}

const myCard = createBankCard();
console.log(myCard.withdraw("1234", 200)); // Thành công
console.log(myCard.pin); // undefined - Bảo mật tuyệt đối
\`\`\`

## 2. Kỹ thuật Memoization (Cache kết quả)
Sử dụng closure để lưu trữ kết quả của các tính toán nặng.

\`\`\`javascript
function slowSquare() {
  const cache = {}; // "Ghi nhớ" nhờ closure
  return function(n) {
    if (n in cache) {
      console.log("Lấy từ cache cho:", n);
      return cache[n];
    }
    console.log("Tính toán mới cho:", n);
    const result = n * n;
    cache[n] = result;
    return result;
  };
}

const square = slowSquare();
square(10); // Tính toán mới
square(10); // Lấy từ cache
\`\`\``
  },

  {
    id: "js3",
    slug: "this-bind-call-apply-prototype",
    title: "this, Binding và Prototype Chain: Nền tảng hướng đối tượng",
    excerpt: "Giải quyết triệt để nỗi sợ về 'this' và hiểu rõ cách JavaScript kế thừa thuộc tính thông qua Prototype.",
    date: "2025-01-18",
    category: "JavaScript",
    imageUrl: IMGS[2],
    content: `# Làm chủ 'this' và Prototype trong JS

## 1. Bốn quy tắc xác định 'this'
Giá trị của \`this\` được xác định tại thời điểm gọi (Run-time), không phải thời điểm khai báo.
1. **Mặc định**: Trong global scope, \`this\` là \`window\`.
2. **Implicit (Ngầm định)**: \`obj.fn()\` -> \`this\` là \`obj\`.
3. **Explicit (Tường minh)**: Dùng \`call\`, \`apply\`, \`bind\`.
4. **New**: \`new Person()\` -> \`this\` là instance mới.

\`\`\`javascript
const user = {
  name: "Alice",
  greet() { console.log(\`Hi, I'm \${this.name}\`); }
};

const admin = { name: "Bob" };

// Mượn hàm dùng .call()
user.greet.call(admin); // "Hi, I'm Bob"
\`\`\`

## 2. Prototype Chain (Chuỗi nguyên mẫu)
Mọi object đều có một "cha" là prototype. Nếu tìm một thuộc tính không thấy, JS sẽ tìm lên cha của nó.

\`\`\`javascript
function Animal(name) { this.name = name; }
Animal.prototype.speak = function() { console.log(this.name + " kêu..."); };

const dog = new Animal("Corgi");
dog.speak(); // "Corgi kêu..."

console.log(dog.__proto__ === Animal.prototype); // true
\`\`\``
  },

  {
    id: "js4",
    slug: "map-filter-reduce-cong-thuc-xu-ly-du-lieu",
    title: "Map, Filter, Reduce: Tư duy xử lý dữ liệu hiện đại",
    excerpt: "Nâng cấp kỹ năng xử lý mảng từ các vòng lặp for đơn giản sang các hàm bậc cao (Higher-Order Functions).",
    date: "2025-01-25",
    category: "JavaScript",
    imageUrl: IMGS[3],
    content: `# Xử lý dữ liệu mảng như một Pro

Thay vì dùng \`for\` hay \`forEach\` và thay đổi dữ liệu gốc, hãy dùng các hàm bất biến (immutable).

## 1. Biến đổi dữ liệu phức tạp với Map
\`\`\`javascript
const rawUsers = [
  { id: 1, first: "John", last: "Doe" },
  { id: 2, first: "Jane", last: "Smith" }
];

const formattedUsers = rawUsers.map(u => ({
  id: u.id,
  fullName: \`\${u.first} \${u.last}\`
}));
\`\`\`

## 2. Reduce: Gom nhóm dữ liệu (GroupBy)
Đây là ứng dụng mạnh mẽ nhất của \`reduce\`.

\`\`\`javascript
const items = [
  { name: 'Apple', category: 'Fruit' },
  { name: 'Onion', category: 'Vegetable' },
  { name: 'Orange', category: 'Fruit' },
];

const grouped = items.reduce((acc, item) => {
  const cat = item.category;
  if (!acc[cat]) acc[cat] = [];
  acc[cat].push(item.name);
  return acc;
}, {});
// Kết quả: { Fruit: ['Apple', 'Orange'], Vegetable: ['Onion'] }
\`\`\``
  },

  {
    id: "js5",
    slug: "debounce-vs-throttle-toi-uu-ux",
    title: "Debounce và Throttle: Tối ưu hóa sự kiện liên tục",
    excerpt: "Kiểm soát hiệu năng khi người dùng gõ phím hoặc cuộn trang. Tránh quá tải cho ứng dụng và Server.",
    date: "2025-02-01",
    category: "JavaScript",
    imageUrl: IMGS[4],
    content: `# Tối ưu hiệu năng với Debounce & Throttle

## 1. Debounce: "Đợi tôi làm xong đã"
Debounce trì hoãn việc thực thi hàm cho đến khi sự kiện ngừng kích hoạt trong một khoảng thời gian.

\`\`\`javascript
function debounce(fn, delay) {
  let timerId;
  return function(...args) {
    clearTimeout(timerId); 
    timerId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

// Ứng dụng: Search Box gọi API
const handleSearch = debounce((query) => {
  console.log("Calling API with:", query);
}, 500);
\`\`\`

## 2. Throttle: "Mỗi giây một lần"
Throttle giới hạn số lần một hàm có thể được gọi trong một khoảng thời gian.

\`\`\`javascript
function throttle(fn, limit) {
  let waiting = false;
  return function(...args) {
    if (!waiting) {
      fn.apply(this, args);
      waiting = true;
      setTimeout(() => { waiting = false; }, limit);
    }
  };
}

window.addEventListener('scroll', throttle(() => {
  console.log('User đang cuộn trang...');
}, 1000));
\`\`\``
  },

  {
    id: "js6",
    slug: "fetch-error-handling-response-ok",
    title: "Fetch API: Xây dựng Wrapper xử lý lỗi chuyên nghiệp",
    excerpt: "Đừng để lỗi 404/500 làm hỏng ứng dụng. Xây dựng một Client Fetch an toàn với interceptor tự chế.",
    date: "2025-02-08",
    category: "JavaScript",
    imageUrl: IMGS[5],
    content: `# Xử lý lỗi Fetch như chuyên gia

Lỗi lớn nhất khi dùng \`fetch\` là nghĩ rằng nó sẽ nhảy vào \`catch\` khi server trả về 404 hoặc 500. Thực tế nó chỉ reject khi mất mạng.

## 1. Xây dựng hàm Request chuẩn
\`\`\`javascript
async function apiRequest(url, options = {}) {
  const response = await fetch(url, options);
  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    const error = new Error(data.message || 'Có lỗi xảy ra');
    error.status = response.status;
    throw error;
  }
  return data;
}
\`\`\`

## 2. Sử dụng thực tế
\`\`\`javascript
async function loadData() {
  try {
    const user = await apiRequest('/api/profile');
    console.log(user);
  } catch (err) {
    console.error("Lỗi:", err.status, err.message);
  }
}
\`\`\``
  },

  {
    id: "js7",
    slug: "localstorage-sessionstorage-cookie-dung-cho-dung",
    title: "Storage Web: Lưu trữ thông minh và Bảo mật",
    excerpt: "Khi nào nên dùng LocalStorage thay vì Cookie? Kỹ thuật đặt thời gian hết hạn (TTL) cho LocalStorage.",
    date: "2025-02-15",
    category: "JavaScript",
    imageUrl: IMGS[6],
    content: `# So sánh các loại lưu trữ trình duyệt

## 1. LocalStorage với TTL (Time-To-Live)
Chúng ta có thể tự viết code để thêm tính năng hết hạn cho LocalStorage.

\`\`\`javascript
function setWithExpiry(key, value, ttl) {
  const item = {
    value: value,
    expiry: Date.now() + ttl,
  };
  localStorage.setItem(key, JSON.stringify(item));
}

function getWithExpiry(key) {
  const itemStr = localStorage.getItem(key);
  if (!itemStr) return null;
  const item = JSON.parse(itemStr);
  if (Date.now() > item.expiry) {
    localStorage.removeItem(key);
    return null;
  }
  return item.value;
}
\`\`\`

## 2. Lựa chọn lưu trữ
- **LocalStorage**: Cài đặt giao diện (Theme).
- **SessionStorage**: Dữ liệu thanh toán một lần.
- **Cookies**: Xác thực (HttpOnly).`
  },

  {
    id: "js8",
    slug: "esm-vs-commonjs-import-export",
    title: "Hệ thống Module: ES Modules vs CommonJS",
    excerpt: "Sự khác biệt về cơ chế nạp module giữa môi trường trình duyệt (ESM) và môi trường Node.js (CommonJS).",
    date: "2025-02-22",
    category: "JavaScript",
    imageUrl: IMGS[7],
    content: `# Cuộc chiến Module trong JS

## 1. CommonJS (Node.js truyền thống)
Sử dụng \`require\` và \`module.exports\`. Nạp đồng bộ.

\`\`\`javascript
const math = require('./math');
module.exports = { run: () => {} };
\`\`\`

## 2. ES Modules (Chuẩn hiện đại)
Sử dụng \`import\` và \`export\`. Phân tích tĩnh, hỗ trợ Tree-shaking.

\`\`\`javascript
import { add } from './math.js';
export const run = () => {};
\`\`\`

**Lưu ý:** ESM yêu cầu phần mở rộng file (\`.js\`) trong trình duyệt, trong khi Node.js (CJS) có thể bỏ qua.`
  },

  {
    id: "js9",
    slug: "xss-csrf-checklist-frontend",
    title: "Bảo mật Web: Xây dựng hệ thống phòng thủ Frontend",
    excerpt: "Hướng dẫn thực chiến chống XSS bằng Sanitization và cấu hình CSP để bảo vệ dữ liệu người dùng.",
    date: "2025-03-01",
    category: "JavaScript",
    imageUrl: IMGS[8],
    content: `# Bảo mật Frontend thực chiến

## 1. Chống XSS (Sanitize dữ liệu)
Đừng bao giờ tin tưởng input của người dùng. Hãy thoát chuỗi nguy hiểm.

\`\`\`javascript
function sanitize(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

const input = "<img src=x onerror=alert(1)>";
document.getElementById('app').innerHTML = sanitize(input);
\`\`\`

## 2. Content Security Policy (CSP)
Sử dụng meta tag hoặc header để chặn các script không xác định.
\`\`\`html
<meta http-equiv="Content-Security-Policy" content="default-src 'self';">
\`\`\``
  },

  {
    id: "js10",
    slug: "promise-vs-async-await-pattern",
    title: "Async/Await: Các Pattern xử lý bất đồng bộ nâng cao",
    excerpt: "Từ Promise.all đến Promise.race. Cách tổ chức mã nguồn bất đồng bộ gọn gàng và dễ mở rộng.",
    date: "2025-03-08",
    category: "JavaScript",
    imageUrl: IMGS[9],
    content: `# Tư duy bất đồng bộ hiện đại

## 1. Tránh Request Waterfall
\`\`\`javascript
// TỐT: Chạy song song
const [user, posts] = await Promise.all([
  fetch('/user'),
  fetch('/posts')
]);
\`\`\`

## 2. Promise.race (Timeout)
\`\`\`javascript
const timeout = new Promise((_, reject) => 
  setTimeout(() => reject('Timeout'), 5000)
);

try {
  const res = await Promise.race([fetch('/data'), timeout]);
} catch (e) {
  console.log("Request quá lâu");
}
\`\`\``
  },

  {
    id: "js11",
    slug: "error-pattern-ui-code-message",
    title: "Thiết kế Error Object: Cầu nối Backend và Frontend",
    excerpt: "Làm thế nào để hiển thị thông báo lỗi thân thiện cho người dùng trong khi vẫn giữ đủ thông tin cho Developer?",
    date: "2025-03-15",
    category: "JavaScript",
    imageUrl: IMGS[10],
    content: `# Quản lý lỗi chuyên nghiệp

## 1. Custom Error Class
\`\`\`javascript
class AppError extends Error {
  constructor(message, code) {
    super(message);
    this.code = code;
  }
}

throw new AppError("Sai mật khẩu", "AUTH_001");
\`\`\`

## 2. Mapping Error Messages
\`\`\`javascript
const ERRORS = {
  "AUTH_001": "Thông tin đăng nhập không chính xác.",
  "NET_000": "Không có kết nối internet."
};
\`\`\``
  },

  {
    id: "js12",
    slug: "auth-flow-access-refresh-token",
    title: "Xây dựng luồng Auth: Access và Refresh Token thực chiến",
    excerpt: "Cơ chế tự động làm mới Token với interceptor. Đảm bảo trải nghiệm không bị ngắt quãng.",
    date: "2025-03-22",
    category: "JavaScript",
    imageUrl: IMGS[11],
    content: `# Luồng xác thực bảo mật

## 1. Cơ chế Refresh Token
Khi Access Token (15p) hết hạn, dùng Refresh Token (7 ngày) để lấy cặp mới.

\`\`\`javascript
async function refreshToken() {
  const res = await fetch('/auth/refresh', { method: 'POST' });
  const { accessToken } = await res.json();
  localStorage.setItem('token', accessToken);
  return accessToken;
}
\`\`\`

## 2. Bảo mật
Luôn lưu Refresh Token trong Cookie \`HttpOnly\` để ngăn chặn việc bị đánh cắp qua JS (XSS).`
  },
];