import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as t,a as e}from"./app-DDqAEwaq.js";const o={},i=e(`<h1 id="sql中的聚合函数" tabindex="-1"><a class="header-anchor" href="#sql中的聚合函数"><span>SQL中的聚合函数</span></a></h1><p>在 SQL 中，<strong>聚合函数</strong>和<strong>窗口函数聚合</strong>是处理数据集时的两种重要方法。以下是它们的详细解释和示例：</p><h2 id="聚合函数" tabindex="-1"><a class="header-anchor" href="#聚合函数"><span>聚合函数</span></a></h2><p><strong>聚合函数</strong>是用于对一组值执行计算并返回单个结果的函数。这类函数通常用于 <code>GROUP BY</code> 子句中以对数据进行分组，然后对每组数据执行汇总计算。</p><h3 id="主要功能" tabindex="-1"><a class="header-anchor" href="#主要功能"><span>主要功能</span></a></h3><ol><li><strong>汇总数据</strong>：对一组数据进行统计或汇总。</li><li><strong>返回单个值</strong>：对输入的多个行计算出一个值。</li></ol><h3 id="常见的聚合函数" tabindex="-1"><a class="header-anchor" href="#常见的聚合函数"><span>常见的聚合函数</span></a></h3><ul><li><strong><code>COUNT()</code></strong>：计算行数。</li><li><strong><code>SUM()</code></strong>：计算总和。</li><li><strong><code>AVG()</code></strong>：计算平均值。</li><li><strong><code>MIN()</code></strong>：找出最小值。</li><li><strong><code>MAX()</code></strong>：找出最大值。</li></ul><h3 id="聚合函数的示例" tabindex="-1"><a class="header-anchor" href="#聚合函数的示例"><span>聚合函数的示例</span></a></h3><p>假设有一张名为 <code>sales</code> 的表，结构如下：</p><table><thead><tr><th>id</th><th>product</th><th>quantity</th><th>price</th></tr></thead><tbody><tr><td>1</td><td>A</td><td>10</td><td>50</td></tr><tr><td>2</td><td>B</td><td>20</td><td>30</td></tr><tr><td>3</td><td>A</td><td>5</td><td>50</td></tr><tr><td>4</td><td>B</td><td>10</td><td>30</td></tr></tbody></table><h4 id="_1-计算所有销售的总量" tabindex="-1"><a class="header-anchor" href="#_1-计算所有销售的总量"><span>1. 计算所有销售的总量</span></a></h4><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">SELECT</span><span style="color:#005CC5;--shiki-dark:#56B6C2;"> SUM</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">(quantity) </span><span style="color:#D73A49;--shiki-dark:#C678DD;">AS</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> total_quantity </span><span style="color:#D73A49;--shiki-dark:#C678DD;">FROM</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> sales;</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>结果：</p><table><thead><tr><th>total_quantity</th></tr></thead><tbody><tr><td>45</td></tr></tbody></table><h4 id="_2-按产品汇总销售总量" tabindex="-1"><a class="header-anchor" href="#_2-按产品汇总销售总量"><span>2. 按产品汇总销售总量</span></a></h4><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">SELECT</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> product, </span><span style="color:#005CC5;--shiki-dark:#56B6C2;">SUM</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">(quantity) </span><span style="color:#D73A49;--shiki-dark:#C678DD;">AS</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> total_quantity </span><span style="color:#D73A49;--shiki-dark:#C678DD;">FROM</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> sales </span><span style="color:#D73A49;--shiki-dark:#C678DD;">GROUP BY</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> product;</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>结果：</p><table><thead><tr><th>product</th><th>total_quantity</th></tr></thead><tbody><tr><td>A</td><td>15</td></tr><tr><td>B</td><td>30</td></tr></tbody></table><h4 id="_3-计算平均销售价格" tabindex="-1"><a class="header-anchor" href="#_3-计算平均销售价格"><span>3. 计算平均销售价格</span></a></h4><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">SELECT</span><span style="color:#005CC5;--shiki-dark:#56B6C2;"> AVG</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">(price) </span><span style="color:#D73A49;--shiki-dark:#C678DD;">AS</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> average_price </span><span style="color:#D73A49;--shiki-dark:#C678DD;">FROM</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> sales;</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>结果：</p><table><thead><tr><th>average_price</th></tr></thead><tbody><tr><td>40</td></tr></tbody></table><h2 id="窗口函数聚合" tabindex="-1"><a class="header-anchor" href="#窗口函数聚合"><span>窗口函数聚合</span></a></h2><p><strong>窗口函数聚合</strong>是一种聚合函数的扩展，它在不减少行数的情况下对数据执行类似的聚合操作。这些函数使用 <code>OVER()</code> 子句来定义数据的窗口（一个子集）来进行计算，而不是对整个结果集进行分组和汇总。</p><h3 id="主要功能-1" tabindex="-1"><a class="header-anchor" href="#主要功能-1"><span>主要功能</span></a></h3><ol><li><strong>执行逐行计算</strong>：对每一行执行计算，但保留所有行。</li><li><strong>创建数据窗口</strong>：通过 <code>OVER()</code> 子句定义行的窗口进行计算。</li></ol><h3 id="常见的窗口函数" tabindex="-1"><a class="header-anchor" href="#常见的窗口函数"><span>常见的窗口函数</span></a></h3><ul><li><strong><code>ROW_NUMBER()</code></strong>：为结果集中的每一行分配唯一的行号。</li><li><strong><code>RANK()</code></strong>：为结果集中的每一行分配排名，具有相同值的行具有相同的排名，后续排名会跳过。</li><li><strong><code>DENSE_RANK()</code></strong>：类似于 <code>RANK()</code>，但后续排名不跳过。</li><li><strong><code>NTILE(n)</code></strong>：将结果集划分为 <code>n</code> 个桶，并返回桶编号。</li><li><strong><code>SUM() OVER()</code></strong>：在指定窗口内对值进行求和。</li><li><strong><code>AVG() OVER()</code></strong>：在指定窗口内对值进行平均。</li><li><strong><code>LEAD()</code></strong>：返回当前行之后的某一行的值。</li><li><strong><code>LAG()</code></strong>：返回当前行之前的某一行的值。</li></ul><h3 id="窗口函数的示例" tabindex="-1"><a class="header-anchor" href="#窗口函数的示例"><span>窗口函数的示例</span></a></h3><p>假设有一张名为 <code>sales</code> 的表，结构如下：</p><table><thead><tr><th>id</th><th>product</th><th>quantity</th><th>price</th></tr></thead><tbody><tr><td>1</td><td>A</td><td>10</td><td>50</td></tr><tr><td>2</td><td>B</td><td>20</td><td>30</td></tr><tr><td>3</td><td>A</td><td>5</td><td>50</td></tr><tr><td>4</td><td>B</td><td>10</td><td>30</td></tr></tbody></table><h4 id="_1-为每一行添加行号" tabindex="-1"><a class="header-anchor" href="#_1-为每一行添加行号"><span>1. 为每一行添加行号</span></a></h4><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">SELECT</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> id, product, quantity, price,</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#56B6C2;">       ROW_NUMBER</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">() </span><span style="color:#D73A49;--shiki-dark:#C678DD;">OVER</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> (</span><span style="color:#D73A49;--shiki-dark:#C678DD;">ORDER BY</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> id) </span><span style="color:#D73A49;--shiki-dark:#C678DD;">AS</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> row_num</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">FROM</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> sales;</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果：</p><table><thead><tr><th>id</th><th>product</th><th>quantity</th><th>price</th><th>row_num</th></tr></thead><tbody><tr><td>1</td><td>A</td><td>10</td><td>50</td><td>1</td></tr><tr><td>2</td><td>B</td><td>20</td><td>30</td><td>2</td></tr><tr><td>3</td><td>A</td><td>5</td><td>50</td><td>3</td></tr><tr><td>4</td><td>B</td><td>10</td><td>30</td><td>4</td></tr></tbody></table><h4 id="_2-为每一行计算累计销售数量" tabindex="-1"><a class="header-anchor" href="#_2-为每一行计算累计销售数量"><span>2. 为每一行计算累计销售数量</span></a></h4><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">SELECT</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> id, product, quantity, price,</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#56B6C2;">       SUM</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">(quantity) </span><span style="color:#D73A49;--shiki-dark:#C678DD;">OVER</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> (</span><span style="color:#D73A49;--shiki-dark:#C678DD;">ORDER BY</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> id) </span><span style="color:#D73A49;--shiki-dark:#C678DD;">AS</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> cumulative_quantity</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">FROM</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> sales;</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果：</p><table><thead><tr><th>id</th><th>product</th><th>quantity</th><th>price</th><th>cumulative_quantity</th></tr></thead><tbody><tr><td>1</td><td>A</td><td>10</td><td>50</td><td>10</td></tr><tr><td>2</td><td>B</td><td>20</td><td>30</td><td>30</td></tr><tr><td>3</td><td>A</td><td>5</td><td>50</td><td>35</td></tr><tr><td>4</td><td>B</td><td>10</td><td>30</td><td>45</td></tr></tbody></table><h4 id="_3-按产品计算累计销售数量" tabindex="-1"><a class="header-anchor" href="#_3-按产品计算累计销售数量"><span>3. 按产品计算累计销售数量</span></a></h4><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">SELECT</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> id, product, quantity, price,</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#56B6C2;">       SUM</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">(quantity) </span><span style="color:#D73A49;--shiki-dark:#C678DD;">OVER</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> (</span><span style="color:#D73A49;--shiki-dark:#C678DD;">PARTITION</span><span style="color:#D73A49;--shiki-dark:#C678DD;"> BY</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> product </span><span style="color:#D73A49;--shiki-dark:#C678DD;">ORDER BY</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> id) </span><span style="color:#D73A49;--shiki-dark:#C678DD;">AS</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> product_cumulative_quantity</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">FROM</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> sales;</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果：</p><table><thead><tr><th>id</th><th>product</th><th>quantity</th><th>price</th><th>product_cumulative_quantity</th></tr></thead><tbody><tr><td>1</td><td>A</td><td>10</td><td>50</td><td>10</td></tr><tr><td>3</td><td>A</td><td>5</td><td>50</td><td>15</td></tr><tr><td>2</td><td>B</td><td>20</td><td>30</td><td>20</td></tr><tr><td>4</td><td>B</td><td>10</td><td>30</td><td>30</td></tr></tbody></table><h4 id="_4-计算每一行与前一行价格的差异" tabindex="-1"><a class="header-anchor" href="#_4-计算每一行与前一行价格的差异"><span>4. 计算每一行与前一行价格的差异</span></a></h4><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">SELECT</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> id, product, quantity, price,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">       price </span><span style="color:#D73A49;--shiki-dark:#ABB2BF;">-</span><span style="color:#005CC5;--shiki-dark:#56B6C2;"> LAG</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">(price, </span><span style="color:#005CC5;--shiki-dark:#D19A66;">1</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="color:#005CC5;--shiki-dark:#D19A66;">0</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">) </span><span style="color:#D73A49;--shiki-dark:#C678DD;">OVER</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> (</span><span style="color:#D73A49;--shiki-dark:#C678DD;">ORDER BY</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> id) </span><span style="color:#D73A49;--shiki-dark:#C678DD;">AS</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> price_diff</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">FROM</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> sales;</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果：</p><table><thead><tr><th>id</th><th>product</th><th>quantity</th><th>price</th><th>price_diff</th></tr></thead><tbody><tr><td>1</td><td>A</td><td>10</td><td>50</td><td>50</td></tr><tr><td>2</td><td>B</td><td>20</td><td>30</td><td>-20</td></tr><tr><td>3</td><td>A</td><td>5</td><td>50</td><td>20</td></tr><tr><td>4</td><td>B</td><td>10</td><td>30</td><td>-20</td></tr></tbody></table><h2 id="聚合函数-vs-窗口函数聚合" tabindex="-1"><a class="header-anchor" href="#聚合函数-vs-窗口函数聚合"><span>聚合函数 vs. 窗口函数聚合</span></a></h2><ul><li><strong>聚合函数</strong>用于对整个数据集或分组的数据集进行汇总，并返回单一结果。使用后通常会减少返回行数。</li><li><strong>窗口函数聚合</strong>则是在不减少行数的情况下进行计算，保留每一行的同时对其进行汇总操作，可以在 <code>OVER()</code> 子句中指定窗口和排序方式。</li></ul><p>两者的主要区别在于，聚合函数会对数据集进行分组并返回一个结果值，而窗口函数聚合会为每一行保留原始数据并在该行上添加计算的结果。</p><h2 id="_1-mysql-聚合函数" tabindex="-1"><a class="header-anchor" href="#_1-mysql-聚合函数"><span>1. MySQL 聚合函数</span></a></h2><h3 id="基本聚合函数" tabindex="-1"><a class="header-anchor" href="#基本聚合函数"><span>基本聚合函数</span></a></h3><ol><li><code>COUNT()</code><ul><li><strong>用途</strong>: 计算行数。</li><li><strong>示例</strong>: <code>SELECT COUNT(*) FROM employees;</code></li></ul></li><li><code>SUM()</code><ul><li><strong>用途</strong>: 求和。</li><li><strong>示例</strong>: <code>SELECT SUM(salary) FROM employees;</code></li></ul></li><li><code>AVG()</code><ul><li><strong>用途</strong>: 计算平均值。</li><li><strong>示例</strong>: <code>SELECT AVG(salary) FROM employees;</code></li></ul></li><li><code>MIN()</code><ul><li><strong>用途</strong>: 查找最小值。</li><li><strong>示例</strong>: <code>SELECT MIN(salary) FROM employees;</code></li></ul></li><li><code>MAX()</code><ul><li><strong>用途</strong>: 查找最大值。</li><li><strong>示例</strong>: <code>SELECT MAX(salary) FROM employees;</code></li></ul></li></ol><h3 id="高级聚合函数" tabindex="-1"><a class="header-anchor" href="#高级聚合函数"><span>高级聚合函数</span></a></h3><ol><li><code>GROUP_CONCAT()</code><ul><li><strong>用途</strong>: 将组内的多个值连接为一个字符串。</li><li><strong>示例</strong>: <code>SELECT GROUP_CONCAT(department) FROM employees;</code></li></ul></li><li><code>VAR_SAMP()</code><ul><li><strong>用途</strong>: 计算样本方差。</li><li><strong>示例</strong>: <code>SELECT VAR_SAMP(salary) FROM employees;</code></li></ul></li><li><code>VAR_POP()</code><ul><li><strong>用途</strong>: 计算总体方差。</li><li><strong>示例</strong>: <code>SELECT VAR_POP(salary) FROM employees;</code></li></ul></li><li><code>STDDEV_SAMP()</code><ul><li><strong>用途</strong>: 计算样本标准偏差。</li><li><strong>示例</strong>: <code>SELECT STDDEV_SAMP(salary) FROM employees;</code></li></ul></li><li><code>STDDEV_POP()</code><ul><li><strong>用途</strong>: 计算总体标准偏差。</li><li><strong>示例</strong>: <code>SELECT STDDEV_POP(salary) FROM employees;</code></li></ul></li></ol><h3 id="窗口函数相关的聚合" tabindex="-1"><a class="header-anchor" href="#窗口函数相关的聚合"><span>窗口函数相关的聚合</span></a></h3><ol><li><code>ROW_NUMBER()</code><ul><li><strong>用途</strong>: 返回当前行的行号。</li><li><strong>示例</strong>: <code>SELECT ROW_NUMBER() OVER (ORDER BY salary) AS rank FROM employees;</code></li></ul></li><li><code>RANK()</code><ul><li><strong>用途</strong>: 返回当前行在分区内的排名。</li><li><strong>示例</strong>: <code>SELECT RANK() OVER (ORDER BY salary) AS rank FROM employees;</code></li></ul></li><li><code>DENSE_RANK()</code><ul><li><strong>用途</strong>: 返回当前行的密集排名。</li><li><strong>示例</strong>: <code>SELECT DENSE_RANK() OVER (ORDER BY salary) AS rank FROM employees;</code></li></ul></li><li><code>NTILE()</code><ul><li><strong>用途</strong>: 将行分配到指定的数量桶中。</li><li><strong>示例</strong>: <code>SELECT NTILE(4) OVER (ORDER BY salary) AS quartile FROM employees;</code></li></ul></li><li><code>LEAD()</code><ul><li><strong>用途</strong>: 返回当前行之后的某一行的值。</li><li><strong>示例</strong>: <code>SELECT LEAD(salary, 1) OVER (ORDER BY salary) AS next_salary FROM employees;</code></li></ul></li><li><code>LAG()</code><ul><li><strong>用途</strong>: 返回当前行之前的某一行的值。</li><li><strong>示例</strong>: <code>SELECT LAG(salary, 1) OVER (ORDER BY salary) AS previous_salary FROM employees;</code></li></ul></li></ol><h2 id="_2-oracle-聚合函数" tabindex="-1"><a class="header-anchor" href="#_2-oracle-聚合函数"><span>2. Oracle 聚合函数</span></a></h2><h3 id="基本聚合函数-1" tabindex="-1"><a class="header-anchor" href="#基本聚合函数-1"><span>基本聚合函数</span></a></h3><ol><li><code>COUNT()</code><ul><li><strong>用途</strong>: 计算行数。</li><li><strong>示例</strong>: <code>SELECT COUNT(*) FROM employees;</code></li></ul></li><li><code>SUM()</code><ul><li><strong>用途</strong>: 求和。</li><li><strong>示例</strong>: <code>SELECT SUM(salary) FROM employees;</code></li></ul></li><li><code>AVG()</code><ul><li><strong>用途</strong>: 计算平均值。</li><li><strong>示例</strong>: <code>SELECT AVG(salary) FROM employees;</code></li></ul></li><li><code>MIN()</code><ul><li><strong>用途</strong>: 查找最小值。</li><li><strong>示例</strong>: <code>SELECT MIN(salary) FROM employees;</code></li></ul></li><li><code>MAX()</code><ul><li><strong>用途</strong>: 查找最大值。</li><li><strong>示例</strong>: <code>SELECT MAX(salary) FROM employees;</code></li></ul></li></ol><h3 id="高级聚合函数-1" tabindex="-1"><a class="header-anchor" href="#高级聚合函数-1"><span>高级聚合函数</span></a></h3><ol><li><code>LISTAGG()</code><ul><li><strong>用途</strong>: 将组内的多个值连接为一个字符串。</li><li><strong>示例</strong>: <code>SELECT LISTAGG(department, &#39;,&#39;) WITHIN GROUP (ORDER BY department) FROM employees;</code></li></ul></li><li><code>VAR_SAMP()</code><ul><li><strong>用途</strong>: 计算样本方差。</li><li><strong>示例</strong>: <code>SELECT VAR_SAMP(salary) FROM employees;</code></li></ul></li><li><code>VAR_POP()</code><ul><li><strong>用途</strong>: 计算总体方差。</li><li><strong>示例</strong>: <code>SELECT VAR_POP(salary) FROM employees;</code></li></ul></li><li><code>STDDEV_SAMP()</code><ul><li><strong>用途</strong>: 计算样本标准偏差。</li><li><strong>示例</strong>: <code>SELECT STDDEV_SAMP(salary) FROM employees;</code></li></ul></li><li><code>STDDEV_POP()</code><ul><li><strong>用途</strong>: 计算总体标准偏差。</li><li><strong>示例</strong>: <code>SELECT STDDEV_POP(salary) FROM employees;</code></li></ul></li></ol><h3 id="窗口函数相关的聚合-1" tabindex="-1"><a class="header-anchor" href="#窗口函数相关的聚合-1"><span>窗口函数相关的聚合</span></a></h3><ol><li><code>ROW_NUMBER()</code><ul><li><strong>用途</strong>: 返回当前行的行号。</li><li><strong>示例</strong>: <code>SELECT ROW_NUMBER() OVER (ORDER BY salary) AS rank FROM employees;</code></li></ul></li><li><code>RANK()</code><ul><li><strong>用途</strong>: 返回当前行在分区内的排名。</li><li><strong>示例</strong>: <code>SELECT RANK() OVER (ORDER BY salary) AS rank FROM employees;</code></li></ul></li><li><code>DENSE_RANK()</code><ul><li><strong>用途</strong>: 返回当前行的密集排名。</li><li><strong>示例</strong>: <code>SELECT DENSE_RANK() OVER (ORDER BY salary) AS rank FROM employees;</code></li></ul></li><li><code>NTILE()</code><ul><li><strong>用途</strong>: 将行分配到指定的数量桶中。</li><li><strong>示例</strong>: <code>SELECT NTILE(4) OVER (ORDER BY salary) AS quartile FROM employees;</code></li></ul></li><li><code>LEAD()</code><ul><li><strong>用途</strong>: 返回当前行之后的某一行的值。</li><li><strong>示例</strong>: <code>SELECT LEAD(salary, 1) OVER (ORDER BY salary) AS next_salary FROM employees;</code></li></ul></li><li><code>LAG()</code><ul><li><strong>用途</strong>: 返回当前行之前的某一行的值。</li><li><strong>示例</strong>: <code>SELECT LAG(salary, 1) OVER (ORDER BY salary) AS previous_salary FROM employees;</code></li></ul></li></ol><h2 id="_3-postgresql-聚合函数" tabindex="-1"><a class="header-anchor" href="#_3-postgresql-聚合函数"><span>3. PostgreSQL 聚合函数</span></a></h2><h3 id="基本聚合函数-2" tabindex="-1"><a class="header-anchor" href="#基本聚合函数-2"><span>基本聚合函数</span></a></h3><ol><li><code>COUNT()</code><ul><li><strong>用途</strong>: 计算行数。</li><li><strong>示例</strong>: <code>SELECT COUNT(*) FROM employees;</code></li></ul></li><li><code>SUM()</code><ul><li><strong>用途</strong>: 求和。</li><li><strong>示例</strong>: <code>SELECT SUM(salary) FROM employees;</code></li></ul></li><li><code>AVG()</code><ul><li><strong>用途</strong>: 计算平均值。</li><li><strong>示例</strong>: <code>SELECT AVG(salary) FROM employees;</code></li></ul></li><li><code>MIN()</code><ul><li><strong>用途</strong>: 查找最小值。</li><li><strong>示例</strong>: <code>SELECT MIN(salary) FROM employees;</code></li></ul></li><li><code>MAX()</code><ul><li><strong>用途</strong>: 查找最大值。</li><li><strong>示例</strong>: <code>SELECT MAX(salary) FROM employees;</code></li></ul></li></ol><h3 id="高级聚合函数-2" tabindex="-1"><a class="header-anchor" href="#高级聚合函数-2"><span>高级聚合函数</span></a></h3><ol><li><code>STRING_AGG()</code><ul><li><strong>用途</strong>: 将组内的多个值连接为一个字符串。</li><li><strong>示例</strong>: <code>SELECT STRING_AGG(department, &#39;,&#39;) FROM employees;</code></li></ul></li><li><code>VAR_SAMP()</code><ul><li><strong>用途</strong>: 计算样本方差。</li><li><strong>示例</strong>: <code>SELECT VAR_SAMP(salary) FROM employees;</code></li></ul></li><li><code>VAR_POP()</code><ul><li><strong>用途</strong>: 计算总体方差。</li><li><strong>示例</strong>: <code>SELECT VAR_POP(salary) FROM employees;</code></li></ul></li><li><code>STDDEV_SAMP()</code><ul><li><strong>用途</strong>: 计算样本标准偏差。</li><li><strong>示例</strong>: <code>SELECT STDDEV_SAMP(salary) FROM employees;</code></li></ul></li><li><code>STDDEV_POP()</code><ul><li><strong>用途</strong>: 计算总体标准偏差。</li><li><strong>示例</strong>: <code>SELECT STDDEV_POP(salary) FROM employees;</code></li></ul></li></ol><h3 id="窗口函数相关的聚合-2" tabindex="-1"><a class="header-anchor" href="#窗口函数相关的聚合-2"><span>窗口函数相关的聚合</span></a></h3><ol><li><code>ROW_NUMBER()</code><ul><li><strong>用途</strong>: 返回当前行的行号。</li><li><strong>示例</strong>: <code>SELECT ROW_NUMBER() OVER (ORDER BY salary) AS rank FROM employees;</code></li></ul></li><li><code>RANK()</code><ul><li><strong>用途</strong>: 返回当前行在分区内的排名。</li><li><strong>示例</strong>: <code>SELECT RANK() OVER (ORDER BY salary) AS rank FROM employees;</code></li></ul></li><li><code>DENSE_RANK()</code><ul><li><strong>用途</strong>: 返回当前行的密集排名。</li><li><strong>示例</strong>: <code>SELECT DENSE_RANK() OVER (ORDER BY salary) AS rank FROM employees;</code></li></ul></li><li><code>NTILE()</code><ul><li><strong>用途</strong>: 将行分配到指定的数量桶中。</li><li><strong>示例</strong>: <code>SELECT NTILE(4) OVER (ORDER BY salary) AS quartile FROM employees;</code></li></ul></li><li><code>LEAD()</code><ul><li><strong>用途</strong>: 返回当前行之后的某一行的值。</li><li><strong>示例</strong>: <code>SELECT LEAD(salary, 1) OVER (ORDER BY salary) AS next_salary FROM employees;</code></li></ul></li><li><code>LAG()</code><ul><li><strong>用途</strong>: 返回当前行之前的某一行的值。</li><li><strong>示例</strong>: <code>SELECT LAG(salary, 1) OVER (ORDER BY salary) AS previous_salary FROM employees;</code></li></ul></li></ol><h3 id="其他聚合函数" tabindex="-1"><a class="header-anchor" href="#其他聚合函数"><span>其他聚合函数</span></a></h3><ol><li><code>MODE()</code><ul><li><strong>用途</strong>: 返回组内数据的众数。</li><li><strong>示例</strong>: <code>SELECT MODE() WITHIN GROUP (ORDER BY salary) FROM employees;</code></li></ul></li><li><code>PERCENTILE_CONT()</code><ul><li><strong>用途</strong>: 计算连续分位数。</li><li><strong>示例</strong>: <code>SELECT PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY salary) FROM employees;</code></li></ul></li><li><code>PERCENTILE_DISC()</code><ul><li><strong>用途</strong>: 计算离散分位数。</li><li><strong>示例</strong>: <code>SELECT PERCENTILE_DISC(0.5) WITHIN GROUP (ORDER BY salary) FROM employees;</code></li></ul></li></ol>`,74),d=[i];function a(r,n){return t(),s("div",null,d)}const h=l(o,[["render",a],["__file","数据库聚合函数.html.vue"]]),g=JSON.parse('{"path":"/%E6%8A%80%E6%9C%AF%E6%96%87%E7%AB%A0/%E6%95%B0%E6%8D%AE%E5%BA%93/%E6%95%B0%E6%8D%AE%E5%BA%93%E8%81%9A%E5%90%88%E5%87%BD%E6%95%B0.html","title":"SQL中的聚合函数","lang":"zh-CN","frontmatter":{"category":["技术文章"],"tag":["数据库","聚合函数"],"date":"2024-06-10T00:00:00.000Z"},"headers":[{"level":2,"title":"聚合函数","slug":"聚合函数","link":"#聚合函数","children":[{"level":3,"title":"主要功能","slug":"主要功能","link":"#主要功能","children":[]},{"level":3,"title":"常见的聚合函数","slug":"常见的聚合函数","link":"#常见的聚合函数","children":[]},{"level":3,"title":"聚合函数的示例","slug":"聚合函数的示例","link":"#聚合函数的示例","children":[]}]},{"level":2,"title":"窗口函数聚合","slug":"窗口函数聚合","link":"#窗口函数聚合","children":[{"level":3,"title":"主要功能","slug":"主要功能-1","link":"#主要功能-1","children":[]},{"level":3,"title":"常见的窗口函数","slug":"常见的窗口函数","link":"#常见的窗口函数","children":[]},{"level":3,"title":"窗口函数的示例","slug":"窗口函数的示例","link":"#窗口函数的示例","children":[]}]},{"level":2,"title":"聚合函数 vs. 窗口函数聚合","slug":"聚合函数-vs-窗口函数聚合","link":"#聚合函数-vs-窗口函数聚合","children":[]},{"level":2,"title":"1. MySQL 聚合函数","slug":"_1-mysql-聚合函数","link":"#_1-mysql-聚合函数","children":[{"level":3,"title":"基本聚合函数","slug":"基本聚合函数","link":"#基本聚合函数","children":[]},{"level":3,"title":"高级聚合函数","slug":"高级聚合函数","link":"#高级聚合函数","children":[]},{"level":3,"title":"窗口函数相关的聚合","slug":"窗口函数相关的聚合","link":"#窗口函数相关的聚合","children":[]}]},{"level":2,"title":"2. Oracle 聚合函数","slug":"_2-oracle-聚合函数","link":"#_2-oracle-聚合函数","children":[{"level":3,"title":"基本聚合函数","slug":"基本聚合函数-1","link":"#基本聚合函数-1","children":[]},{"level":3,"title":"高级聚合函数","slug":"高级聚合函数-1","link":"#高级聚合函数-1","children":[]},{"level":3,"title":"窗口函数相关的聚合","slug":"窗口函数相关的聚合-1","link":"#窗口函数相关的聚合-1","children":[]}]},{"level":2,"title":"3. PostgreSQL 聚合函数","slug":"_3-postgresql-聚合函数","link":"#_3-postgresql-聚合函数","children":[{"level":3,"title":"基本聚合函数","slug":"基本聚合函数-2","link":"#基本聚合函数-2","children":[]},{"level":3,"title":"高级聚合函数","slug":"高级聚合函数-2","link":"#高级聚合函数-2","children":[]},{"level":3,"title":"窗口函数相关的聚合","slug":"窗口函数相关的聚合-2","link":"#窗口函数相关的聚合-2","children":[]},{"level":3,"title":"其他聚合函数","slug":"其他聚合函数","link":"#其他聚合函数","children":[]}]}],"git":{"createdTime":1718026727000,"updatedTime":1718074078000,"contributors":[{"name":"Vinci","email":"1341060890@qq.com","commits":3}]},"readingTime":{"minutes":7.4,"words":2219},"filePathRelative":"技术文章/数据库/数据库聚合函数.md","localizedDate":"2024年6月10日","excerpt":"\\n<p>在 SQL 中，<strong>聚合函数</strong>和<strong>窗口函数聚合</strong>是处理数据集时的两种重要方法。以下是它们的详细解释和示例：</p>\\n<h2>聚合函数</h2>\\n<p><strong>聚合函数</strong>是用于对一组值执行计算并返回单个结果的函数。这类函数通常用于 <code>GROUP BY</code> 子句中以对数据进行分组，然后对每组数据执行汇总计算。</p>\\n<h3>主要功能</h3>\\n<ol>\\n<li><strong>汇总数据</strong>：对一组数据进行统计或汇总。</li>\\n<li><strong>返回单个值</strong>：对输入的多个行计算出一个值。</li>\\n</ol>"}');export{h as comp,g as data};
