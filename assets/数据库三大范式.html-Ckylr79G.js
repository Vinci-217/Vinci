import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as d,o as e,a as r}from"./app-C_MqFCxN.js";const o={},h=r('<h1 id="数据库三大范式" tabindex="-1"><a class="header-anchor" href="#数据库三大范式"><span>数据库三大范式</span></a></h1><blockquote><p>第一范式是满足了原子性</p><p>第二范式是消除了部分依赖</p><p>第三范式是消除了传递依赖</p></blockquote><h2 id="第一范式" tabindex="-1"><a class="header-anchor" href="#第一范式"><span>第一范式</span></a></h2><blockquote><p>第一范式是满足了原子性</p></blockquote><p>比如下面的表：</p><table><thead><tr><th>学生ID</th><th>姓名</th><th>课程</th></tr></thead><tbody><tr><td>1</td><td>张三</td><td>数学, 英语</td></tr><tr><td>2</td><td>李四</td><td>物理, 化学</td></tr></tbody></table><p>课程里面只能有一个数据，不能两个混杂，所以改成下面的表：</p><table><thead><tr><th>学生ID</th><th>姓名</th><th>课程</th></tr></thead><tbody><tr><td>1</td><td>张三</td><td>数学</td></tr><tr><td>1</td><td>张三</td><td>英语</td></tr><tr><td>2</td><td>李四</td><td>物理</td></tr><tr><td>2</td><td>李四</td><td>化学</td></tr></tbody></table><p>这样就满足了原子性，实现了第一范式</p><h2 id="第二范式" tabindex="-1"><a class="header-anchor" href="#第二范式"><span>第二范式</span></a></h2><blockquote><p>第二范式是消除了部分依赖</p></blockquote><p>什么是部分依赖呢？部分依赖就是C依赖AB，那么缺了A不行，缺了B也不行。</p><p>给出下面的<strong>销售情况表</strong></p><table><thead><tr><th>OrderID</th><th>CustomerID</th><th>CustomerName</th><th>ProductID</th><th>ProductName</th><th>Quantity</th><th>Price</th></tr></thead><tbody><tr><td>1</td><td>101</td><td>Alice</td><td>001</td><td>Product A</td><td>2</td><td>10.00</td></tr><tr><td>2</td><td>102</td><td>Bob</td><td>002</td><td>Product B</td><td>5</td><td>20.00</td></tr><tr><td>...</td><td>...</td><td>...</td><td>...</td><td>...</td><td>...</td><td>...</td></tr></tbody></table><ul><li><code>CustomerID</code> 和 <code>CustomerName</code> 依赖于 <code>OrderID</code>，但它们实际上是属于客户信息。</li><li><code>ProductID</code> 和 <code>ProductName</code> 依赖于 <code>OrderID</code>，但它们实际上是属于产品信息。</li></ul><p>我们可以这样拆分：</p><p><strong>订单表</strong></p><table><thead><tr><th>OrderID</th><th>CustomerID</th><th>ProductID</th><th>Quantity</th><th>Price</th></tr></thead><tbody><tr><td>1</td><td>101</td><td>001</td><td>2</td><td>10.00</td></tr><tr><td>2</td><td>102</td><td>002</td><td>5</td><td>20.00</td></tr><tr><td>...</td><td>...</td><td>...</td><td>...</td><td>...</td></tr></tbody></table><p>这里，<code>OrderID</code> 是主键，<code>CustomerID</code> 和 <code>ProductID</code> 是外键，完全依赖于 <code>OrderID</code>。</p><p><strong>客户表</strong></p><table><thead><tr><th>CustomerID</th><th>CustomerName</th></tr></thead><tbody><tr><td>101</td><td>Alice</td></tr><tr><td>102</td><td>Bob</td></tr><tr><td>...</td><td>...</td></tr></tbody></table><p>这里，<code>CustomerID</code> 是主键，<code>CustomerName</code> 完全依赖于 <code>CustomerID</code>。</p><p><strong>产品表</strong></p><table><thead><tr><th>ProductID</th><th>ProductName</th></tr></thead><tbody><tr><td>001</td><td>Product A</td></tr><tr><td>002</td><td>Product B</td></tr><tr><td>...</td><td>...</td></tr></tbody></table><p>这里，<code>ProductID</code> 是主键，<code>ProductName</code> 完全依赖于 <code>ProductID</code>。</p><p>这样就消除了部分依赖</p><h2 id="第三范式" tabindex="-1"><a class="header-anchor" href="#第三范式"><span>第三范式</span></a></h2><blockquote><p>第三范式是消除了传递依赖</p></blockquote><p>什么是传递依赖呢？A依赖于B，B最终还得依赖于C，其中C是表的主键，那么这就是一个传递依赖</p><p>给出原始课程表：</p><table><thead><tr><th>StudentID</th><th>StudentName</th><th>CourseID</th><th>CourseName</th><th>TeacherID</th><th>TeacherName</th></tr></thead><tbody><tr><td>1</td><td>Alice</td><td>101</td><td>Math</td><td>1</td><td>Mr. Smith</td></tr><tr><td>1</td><td>Alice</td><td>102</td><td>Science</td><td>2</td><td>Ms. Johnson</td></tr><tr><td>2</td><td>Bob</td><td>101</td><td>Math</td><td>1</td><td>Mr. Smith</td></tr><tr><td>...</td><td>...</td><td>...</td><td>...</td><td>...</td><td>...</td></tr></tbody></table><ul><li><code>StudentName</code> 依赖于 <code>StudentID</code>，这是一个部分依赖，因为它只依赖于主键的一部分。</li><li><code>CourseName</code> 和 <code>TeacherName</code> 依赖于 <code>CourseID</code> 和 <code>TeacherID</code>，这也是部分依赖。</li><li><code>TeacherName</code> 依赖于 <code>CourseID</code>，这是一个传递依赖，因为它通过 <code>CourseID</code> 间接依赖于 <code>StudentID</code>。</li></ul><p>对于这个表，我们这样拆分：</p><p><strong>学生表</strong></p><table><thead><tr><th>StudentID</th><th>StudentName</th></tr></thead><tbody><tr><td>1</td><td>Alice</td></tr><tr><td>2</td><td>Bob</td></tr><tr><td>...</td><td>...</td></tr></tbody></table><p><strong>课程表</strong></p><table><thead><tr><th>CourseID</th><th>CourseName</th></tr></thead><tbody><tr><td>101</td><td>Math</td></tr><tr><td>102</td><td>Science</td></tr><tr><td>...</td><td>...</td></tr></tbody></table><p><strong>教师表</strong></p><table><thead><tr><th>TeacherID</th><th>TeacherName</th></tr></thead><tbody><tr><td>1</td><td>Mr. Smith</td></tr><tr><td>2</td><td>Ms. Johnson</td></tr><tr><td>...</td><td>...</td></tr></tbody></table><p><strong>选课表</strong></p><table><thead><tr><th>StudentID</th><th>CourseID</th><th>TeacherID</th></tr></thead><tbody><tr><td>1</td><td>101</td><td>1</td></tr><tr><td>1</td><td>102</td><td>2</td></tr><tr><td>2</td><td>101</td><td>1</td></tr><tr><td>...</td><td>...</td><td>...</td></tr></tbody></table><p>从而实现：</p><ul><li>学生表只包含学生编号和姓名，消除了对课程编号的依赖。</li><li>课程表只包含课程编号和课程名称，消除了对教师编号的依赖。</li><li>教师表只包含教师编号和教师姓名。</li><li>选课表将学生、课程和教师的关系连接起来，消除了传递依赖。</li></ul>',43),a=[h];function c(n,l){return e(),d("div",null,a)}const i=t(o,[["render",c],["__file","数据库三大范式.html.vue"]]),u=JSON.parse('{"path":"/%E6%8A%80%E6%9C%AF%E6%96%87%E7%AB%A0/%E6%95%B0%E6%8D%AE%E5%BA%93/%E6%95%B0%E6%8D%AE%E5%BA%93%E4%B8%89%E5%A4%A7%E8%8C%83%E5%BC%8F.html","title":"数据库三大范式","lang":"zh-CN","frontmatter":{"category":["技术文章"],"tag":["数据库","范式"]},"headers":[{"level":2,"title":"第一范式","slug":"第一范式","link":"#第一范式","children":[]},{"level":2,"title":"第二范式","slug":"第二范式","link":"#第二范式","children":[]},{"level":2,"title":"第三范式","slug":"第三范式","link":"#第三范式","children":[]}],"git":{"createdTime":1716730750000,"updatedTime":1717576805000,"contributors":[{"name":"Vinci","email":"1341060890@qq.com","commits":3}]},"readingTime":{"minutes":2.4,"words":721},"filePathRelative":"技术文章/数据库/数据库三大范式.md","localizedDate":"2024年5月26日","excerpt":"\\n<blockquote>\\n<p>第一范式是满足了原子性</p>\\n<p>第二范式是消除了部分依赖</p>\\n<p>第三范式是消除了传递依赖</p>\\n</blockquote>\\n<h2>第一范式</h2>\\n<blockquote>\\n<p>第一范式是满足了原子性</p>\\n</blockquote>\\n<p>比如下面的表：</p>\\n<table>\\n<thead>\\n<tr>\\n<th>学生ID</th>\\n<th>姓名</th>\\n<th>课程</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>1</td>\\n<td>张三</td>\\n<td>数学, 英语</td>\\n</tr>\\n<tr>\\n<td>2</td>\\n<td>李四</td>\\n<td>物理, 化学</td>\\n</tr>\\n</tbody>\\n</table>"}');export{i as comp,u as data};
