define('docs/renderers/FormItem.md', function(require, exports, module) {

  module.exports = {
    "html": "<h3><a class=\"anchor\" name=\"formitem\" href=\"#formitem\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>FormItem</h3><p>Form 中主要是由各种 FormItem 组成。FormItem 中主要包含这些字段。</p>\n<ul>\n<li><code>name</code> 字段名，表单提交时的 key。</li>\n<li><code>value</code> 值，可以通过它设置默认值。</li>\n<li><code>label</code> 描述标题，当表单为水平布局时，左边即便是不设置 label 为了保持对齐也会留空，如果想要去掉空白，请设置成 <code>false</code>。</li>\n<li><code>description</code> 描述内容。</li>\n<li><code>placeholder</code> 占位内容。</li>\n<li><code>type</code> 指定表单类型，如： <code>text</code>、<code>textarea</code>、<code>date</code>、<code>email</code>等等</li>\n<li><code>inline</code> 是否为 inline 模式。</li>\n<li><code>submitOnChange</code> 是否该表单项值发生变化时就提交当前表单。</li>\n<li><code>className</code> 表单最外层类名。</li>\n<li><code>disabled</code> 当前表单项是否是禁用状态。</li>\n<li><code>disabledOn</code> 通过<a href=\"/docs/renderers/Types#表达式\">表达式</a>来配置当前表单项的禁用状态。</li>\n<li><code>visible</code> 是否可见。</li>\n<li><code>visibleOn</code> 通过<a href=\"/docs/renderers/Types#表达式\">表达式</a>来配置当前表单项是否显示。</li>\n<li><code>hidden</code> 是否隐藏，不要跟 <code>visible</code> <code>visibleOn</code> 同时配置</li>\n<li><code>hiddenOn</code> 通过<a href=\"/docs/renderers/Types#表达式\">表达式</a>来配置当前表单项是否隐藏。</li>\n<li><code>inputClassName</code> 表单控制器类名。</li>\n<li><code>labelClassName</code> label 的类名。</li>\n<li><code>required</code> 是否为必填。</li>\n<li><code>requiredOn</code> 通过<a href=\"/docs/renderers/Types#表达式\">表达式</a>来配置当前表单项是否为必填。</li>\n<li><p><code>validations</code> 格式验证，支持设置多个，多个规则用英文逗号隔开。</p>\n<ul>\n<li><code>isEmptyString</code> 必须是空白字符。</li>\n<li><code>isEmail</code> 必须是 Email。</li>\n<li><code>isUrl</code> 必须是 Url。</li>\n<li><code>isNumeric</code> 必须是 数值。</li>\n<li><code>isAlpha</code> 必须是 字母。</li>\n<li><code>isAlphanumeric</code> 必须是 字母或者数字。</li>\n<li><code>isInt</code> 必须是 整形。</li>\n<li><code>isFloat</code> 必须是 浮点形。</li>\n<li><code>isLength:length</code> 是否长度正好等于设定值。</li>\n<li><code>minLength:length</code> 最小长度。</li>\n<li><code>maxLength:length</code> 最大长度。</li>\n<li><code>maximum:length</code> 最大值。</li>\n<li><code>minimum:length</code> 最小值。</li>\n<li><code>equals:xxx</code> 当前值必须完全等于 xxx。</li>\n<li><code>equalsField:xxx</code> 当前值必须与 xxx 变量值一致。</li>\n<li><code>isJson</code> 是否是合法的 Json 字符串。</li>\n<li><code>notEmptyString</code> 要求输入内容不是空白。</li>\n<li><code>isUrlPath</code> 是 url 路径。</li>\n<li><code>matchRegexp:/foo/</code> 必须命中某个正则。</li>\n<li><code>matchRegexp1:/foo/</code> 必须命中某个正则。</li>\n<li><code>matchRegexp2:/foo/</code> 必须命中某个正则。</li>\n<li><code>matchRegexp3:/foo/</code> 必须命中某个正则。</li>\n<li><code>matchRegexp4:/foo/</code> 必须命中某个正则。\n如：</li>\n</ul>\n<pre><code class=\"lang-js\">{\n  <span class=\"hljs-string\">\"validations\"</span>: <span class=\"hljs-string\">\"isNumeric,minimum:10\"</span>,\n\n  // 或者对象配置方式, 推荐\n  <span class=\"hljs-string\">\"validations\"</span>: {\n    <span class=\"hljs-string\">\"isNumeric\"</span>: <span class=\"hljs-literal\">true</span>,\n    <span class=\"hljs-string\">\"minimum\"</span>: <span class=\"hljs-number\">10</span>\n  }\n}\n</code></pre>\n</li>\n<li><p><code>validationErrors</code> 自定义错误提示, 配置为对象, key 为规则名, value 为错误提示字符串(提示:其中<code>$1</code>表示输入)\n如：</p>\n<pre><code class=\"lang-json\">{\n    <span class=\"hljs-attr\">\"validationErrors\"</span>: {\n        <span class=\"hljs-attr\">\"isEmail\"</span>: <span class=\"hljs-string\">\"请输入正确的邮箱地址\"</span>\n    }\n}\n</code></pre>\n</li>\n<li><code>validateOnChange</code> 是否修改就验证数值，默认当表单提交过就会每次修改验证，如果要关闭请设置为 <code>false</code>，即便是关了，表单提交前还是会验证的。</li>\n</ul>\n<div class=\"amis-preview\" style=\"height: 400px\"><script type=\"text/schema\" height=\"400\" scope=\"form-item\">{\n  \"type\": \"text\",\n  \"name\": \"test1\",\n  \"label\": \"Label\",\n  \"description\": \"Description...\",\n  \"placeholder\": \"Placeholder\",\n  \"validateOnChange\": true,\n  \"validations\": \"matchRegexp: /^a/, minLength:3,maxLength:5\",\n  \"validationErrors\": {\n    \"matchRegexp\": \"必须为a开头\",\n    \"minLength\": \"小伙伴，最低为$1个字符!\"\n  }\n}\n</script></div>\n<p>不同类型的表单，可配置项还有更多，具体请看下面对应的类型。</p>\n",
    "toc": {
      "label": "目录",
      "type": "toc",
      "children": [
        {
          "label": "FormItem",
          "fragment": "formitem",
          "fullPath": "#formitem",
          "level": 3
        }
      ],
      "level": 0
    }
  };

});
