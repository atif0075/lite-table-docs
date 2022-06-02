<template>
  <section>
    <Header title="API Reference" />
  </section>
  <section class="pt-20 px-3 pb-10">
    <div id="props">
      <h1 class="head">Props</h1>
      <div class="pt-2">
        <ul class="list-square pl-5">
          <li class="mb-2 list-square">
            <b>title</b>
            <ul class="list-disc pl-10">
              <li>Description: Table-title</li>
              <li>Required: <span class="text-green">No</span></li>
              <li>Type: <span class="text-green">String</span></li>
              <li>Default: <span class="text-green">""</span></li>
            </ul>
          </li>
          <li class="mb-2 list-square">
            <b>is-slot-mode</b>
            <ul class="list-disc pl-10">
              <li>
                Description: If you want use v-slot (V-slot Mode), set TRUE.
              </li>
              <li>Required: <span class="text-green">No</span></li>
              <li>Type: <span class="text-green">Boolean</span></li>
              <li>Default: <span class="text-green">false</span></li>
            </ul>
          </li>
          <li class="mb-2 list-square">
            <b>is-static-mode</b>
            <ul class="list-disc pl-10">
              <li>
                Description: If you not need use ajax or axios to get any data.
                set TRUE.
              </li>
              <li>Required: <span class="text-green">No</span></li>
              <li>Type: <span class="text-green">Boolean</span></li>
              <li>Default: <span class="text-green">false</span></li>
            </ul>
          </li>
          <li class="mb-2 list-square">
            <b>has-checkbox</b>
            <ul class="list-disc pl-10">
              <li>Description: Show checkbox on rows</li>
              <li>Required: <span class="text-green">No</span></li>
              <li>Type: <span class="text-green">Boolean</span></li>
              <li>Default: <span class="text-green">false</span></li>
            </ul>
          </li>
          <li class="mb-2 list-square">
            <b>checked-return-type</b>
            <ul class="list-disc pl-10">
              <li>Description: Return checked row data's type</li>
              <li>Required: <span class="text-green">No</span></li>
              <li>Type: <span class="text-green">String</span></li>
              <li>Default: <span class="text-green">key</span></li>
              <li>Values: <span class="text-green">key | row</span></li>
            </ul>
          </li>
          <li class="mb-2 list-square">
            <b>is-loading</b>
            <ul class="list-disc pl-10">
              <li>
                Description: Show loading modal (Not required on is-static-mode)
              </li>
              <li>Required: <span class="text-green">No</span></li>
              <li>Type: <span class="text-green">Boolean</span></li>
              <li>Default: <span class="text-green">false</span></li>
            </ul>
          </li>
          <li class="mb-2 list-square">
            <b>is-re-search</b>
            <ul class="list-disc pl-10">
              <li>
                Description: If reload data, be set true (Not required on
                is-static-mode)
              </li>
              <li>Required: <span class="text-green">No</span></li>
              <li>Type: <span class="text-green">Boolean</span></li>
              <li>Default: <span class="text-green">false</span></li>
            </ul>
          </li>
          <li class="mb-2 list-square">
            <b>columns</b>
            <ul class="list-disc pl-10">
              <li>Description: The table columns</li>
              <li>Required: <span class="text-danger">Yes</span></li>
              <li>Type: <span class="text-green">Array</span></li>
              <li>Default: <span class="text-green">null</span></li>
              <ul class="list-disc pl-10">
                <li class="mb-2 list-square">
                  <ul class="list-disc pl-10">
                    <b>isKey</b>
                    <li>Description: If field is primary key. set to true</li>
                    <li>Required: <span class="text-green">No</span></li>
                    <li>Type: <span class="text-green">Boolean</span></li>
                    <li>Default: <span class="text-green">false</span></li>
                  </ul>
                </li>
                <li class="mb-2 list-square">
                  <ul class="list-disc pl-10">
                    <b>label</b>
                    <li>Description: Field lable for display</li>
                    <li>Required: <span class="text-danger">Yes</span></li>
                    <li>Type: <span class="text-green">string</span></li>
                  </ul>
                </li>
                <li class="mb-2 list-square">
                  <ul class="list-disc pl-10">
                    <b>field</b>
                    <li>Description: Row field keyname</li>
                    <li>Required: <span class="text-danger">Yes</span></li>
                    <li>Type: <span class="text-green">string</span></li>
                  </ul>
                </li>
                <li class="mb-2 list-square">
                  <ul class="list-disc pl-10">
                    <b>width</b>
                    <li>Description: Field's width size</li>
                    <li>Required: <span class="text-green">No</span></li>
                    <li>Type: <span class="text-green">string</span></li>
                  </ul>
                </li>
                <li class="mb-2 list-square">
                  <ul class="list-disc pl-10">
                    <b>sortable</b>
                    <li>Description: If the field can sorting. set to true</li>
                    <li>Required: <span class="text-green">No</span></li>
                    <li>Type: <span class="text-green">Boolean</span></li>
                    <li>Default: <span class="text-green">false</span></li>
                  </ul>
                </li>
                <li class="mb-2 list-square">
                  <ul class="list-disc pl-10">
                    <b>display</b>
                    <li>
                      Description: You can customize display data in there.
                      (html tag or Etc.)
                    </li>
                    <li>Required: <span class="text-green">No</span></li>
                    <li>Type: <span class="text-green">Function</span></li>
                    <li>Default: <span class="text-green">null</span></li>
                  </ul>
                </li>
                <li class="mb-2 list-square">
                  <ul class="list-disc pl-10">
                    <b>headerClasses</b>
                    <li>Description: Data header's classes array</li>
                    <li>Required: <span class="text-green">No</span></li>
                    <li>Type: <span class="text-green">Array</span></li>
                    <li>Default: <span class="text-green">null</span></li>
                    <li>
                      Example:
                      <span class="text-green">["bg-gray", "color-red"]</span>
                    </li>
                  </ul>
                </li>
                <li class="mb-2 list-square">
                  <ul class="list-disc pl-10">
                    <b>columnClasses</b>
                    <li>Description: Data column's classes array</li>
                    <li>Required: <span class="text-green">No</span></li>
                    <li>Type: <span class="text-green">Array</span></li>
                    <li>Default: <span class="text-green">null</span></li>
                    <li>
                      Example:
                      <span class="text-green">["bg-gray", "color-red"]</span>
                    </li>
                  </ul>
                </li>
                <li class="mb-2 list-square">
                  <ul class="list-disc pl-10">
                    <b>headerStyles</b>
                    <li>Description: Data header's in-line style object</li>
                    <li>Required: <span class="text-green">No</span></li>
                    <li>Type: <span class="text-green">Object</span></li>
                    <li>Default: <span class="text-green">null</span></li>
                    <li>
                      Example:
                      <span class="text-green"
                        >{"background": "gray", "color": "red"}</span
                      >
                    </li>
                  </ul>
                </li>
                <li class="mb-2 list-square">
                  <ul class="list-disc pl-10">
                    <b>columnStyles</b>
                    <li>Description: Data column's in-line style object</li>
                    <li>Required: <span class="text-green">No</span></li>
                    <li>Type: <span class="text-green">Object</span></li>
                    <li>Default: <span class="text-green">null</span></li>
                    <li>
                      Example:
                      <span class="text-green"
                        >{"background": "gray", "color": "red"}</span
                      >
                    </li>
                  </ul>
                </li>
              </ul>
            </ul>
          </li>
        </ul>
        <li class="mb-2 list-square">
          <b>rows</b>
          <ul class="list-disc pl-10">
            <li>Description: Records</li>
            <li>Required: <span class="text-danger">Yes</span></li>
            <li>Type: <span class="text-green">Array</span></li>
          </ul>
        </li>
        <li class="mb-2 list-square">
          <b>rowClasses</b>
          <ul class="list-disc pl-10">
            <li>Description: &lt;tr&gt; tag's classes</li>
            <li>Required: <span class="text-danger">No</span></li>
            <li>Type: <span class="text-green">Array | Function</span></li>
            <li>
              Example:
              <span class="text-green"
                >["a", "b"] | (row) =&gt; { return (row.name === "tony) ?
                ['member'] : [] }</span
              >
            </li>
          </ul>
        </li>
        <li class="mb-2 list-square">
          <b>total</b>
          <ul class="list-disc pl-10">
            <li>Description: Records count</li>
            <li>Required: <span class="text-danger">Yes</span></li>
            <li>Type: <span class="text-green">Number</span></li>
          </ul>
        </li>
        <li class="mb-2 list-square">
          <b>sortable</b>
          <ul class="list-disc pl-10">
            <li>Description: Order field and sort for Sortable</li>
            <li>Required: <span class="text-danger">Yes</span></li>
            <li>Type: <span class="text-green">Object</span></li>
            <ul class="list-disc pl-10">
              <li class="mb-2 list-square">
                <ul class="list-disc pl-10">
                  <b>order</b>
                  <li>Description: Field key</li>
                  <li>Required: <span class="text-danger">Yes</span></li>
                  <li>Type: <span class="text-green">string</span></li>
                </ul>
              </li>
              <li class="mb-2 list-square">
                <ul class="list-disc pl-10">
                  <b>sort</b>
                  <li>Description: "asc" or "desc"</li>
                  <li>Required: <span class="text-danger">Yes</span></li>
                  <li>Type: <span class="text-green">string</span></li>
                </ul>
              </li>
            </ul>
          </ul>
        </li>
        <li class="mb-2 list-square">
          <b>messages</b>
          <ul class="list-disc pl-10">
            <li>Description: Messages</li>
            <li>Required: <span class="text-green">No</span></li>
            <li>Type: <span class="text-green">Object</span></li>
            <ul class="list-disc pl-10">
              <li class="mb-2 list-square">
                <ul class="list-disc pl-10">
                  <b>pagingInfo</b>
                  <li>Required: <span class="text-green">No</span></li>
                  <li>Type: <span class="text-green">string</span></li>
                  <li>
                    Default:
                    <span class="text-green">"Showing {0}-{1} of {2}"</span>
                  </li>
                </ul>
              </li>
              <li class="mb-2 list-square">
                <ul class="list-disc pl-10">
                  <b>pageSizeChangeLabel</b>
                  <li>Required: <span class="text-green">No</span></li>
                  <li>Type: <span class="text-green">string</span></li>
                  <li>Default: <span class="text-green">"Row count:"</span></li>
                </ul>
              </li>
              <li class="mb-2 list-square">
                <ul class="list-disc pl-10">
                  <b>gotoPageLabel</b>
                  <li>Required: <span class="text-green">No</span></li>
                  <li>Type: <span class="text-green">string</span></li>
                  <li>
                    Default: <span class="text-green">"Go to page:"</span>
                  </li>
                </ul>
              </li>
              <li class="mb-2 list-square">
                <ul class="list-disc pl-10">
                  <b>noDataAvailable</b>
                  <li>Required: <span class="text-green">No</span></li>
                  <li>Type: <span class="text-green">string</span></li>
                  <li>Default: <span class="text-green">"No data"</span></li>
                </ul>
              </li>
            </ul>
          </ul>
        </li>
        <li class="mb-2 list-square">
          <b>is-hide-paging</b>
          <ul class="list-disc pl-10">
            <li>Description: No Show paging infomation on bottom</li>
            <li>Required: <span class="text-green">No</span></li>
            <li>Type: <span class="text-green">Boolean</span></li>
            <li>Default: <span class="text-green">false</span></li>
          </ul>
        </li>
        <li class="mb-2 list-square">
          <b>page</b>
          <ul class="list-disc pl-10">
            <li>
              Description: If you want to control page no yourself, use it can
              will be to change page no.
            </li>
            <li>Required: <span class="text-green">No</span></li>
            <li>Type: <span class="text-green">Number</span></li>
            <li>Default: <span class="text-green">1</span></li>
          </ul>
        </li>
        <li class="mb-2 list-square">
          <b>page-size</b>
          <ul class="list-disc pl-10">
            <li>
              Description: Default display the number of items on one page.
              <span class="text-red-500">In most cases no set required.</span>
            </li>
            <li>Required: <span class="text-green">No</span></li>
            <li>Type: <span class="text-green">Number</span></li>
            <li>Default: <span class="text-green">10</span></li>
          </ul>
        </li>
        <li class="mb-2 list-square">
          <b>pageOptions</b>
          <ul class="list-disc pl-10">
            <li>Description: Pages dropdown list</li>
            <li>Required: <span class="text-green">No</span></li>
            <li>Type: <span class="text-green">Array</span></li>
            <ul class="list-disc pl-10">
              <li class="mb-2 list-square">
                <ul class="list-disc pl-10">
                  <li>Required: <span class="text-green">Yes</span></li>
                  <li>Type: <span class="text-green">Object</span></li>
                  <li>
                    <ul class="list-disc pl-10">
                      <b>value</b>
                      <li>Required: <span class="text-green">Yes</span></li>
                      <li>Type: <span class="text-green">Number</span></li>
                    </ul>
                    <ul class="list-disc pl-10">
                      <b>text</b>
                      <li>Required: <span class="text-green">Yes</span></li>
                      <li>
                        Type: <span class="text-green">Number | string</span>
                      </li>
                    </ul>
                  </li>
                  <li>
                    Default:[ { value: 10, text: 10 }, { value: 25, text: 25 },
                    { value: 50, text: 50 } ]
                  </li>
                </ul>
              </li>
            </ul>
          </ul>
        </li>
      </div>
    </div>
    <div id="events">
      <h1 class="head">Events</h1>
      <div class="pt-2">
        <ul class="list-square pl-5">
          <li class="mb-2">
            <b>do-search</b>
            <ul class="list-disc pl-10">
              <li>
                Description: Your search event.
                <span class="text-red-500"
                  >It's will be auto trigger after data sort and paging.</span
                >
              </li>
              <li>
                Hint:
                <span class="text-red-500"
                  >In static-mode no set required.</span
                >
              </li>
              <li>
                Type:
                <span class="text-green"
                  >(offset, limit, order, sort) =&gt; void</span
                >
              </li>
              <li>
                Arguments:
                <ul class="list-square pl-10">
                  <li>
                    <ul class="list-disc pl-10">
                      <b>offset</b>
                      <li>Description: Offset value for database.</li>
                      <li>Required: <span class="text-danger">Yes</span></li>
                      <li>Type: <span class="text-green">Number</span></li>
                    </ul>
                  </li>
                  <li>
                    <ul class="list-disc pl-10">
                      <b>limit</b>
                      <li>Description: limit value for database.</li>
                      <li>Required: <span class="text-danger">Yes</span></li>
                      <li>Type: <span class="text-green">Number</span></li>
                    </ul>
                  </li>
                  <li>
                    <ul class="list-disc pl-10">
                      <b>order</b>
                      <li>Description: Sortable value for database.</li>
                      <li>Required: <span class="text-danger">Yes</span></li>
                      <li>Type: <span class="text-green">string</span></li>
                    </ul>
                  </li>
                  <li>
                    <ul class="list-disc pl-10">
                      <b>sort</b>
                      <li>Description: Sortable value for database.</li>
                      <li>Required: <span class="text-danger">Yes</span></li>
                      <li>Type: <span class="text-green">string</span></li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li class="mb-2">
            <b>is-finished</b>
            <ul class="list-disc pl-10">
              <li>
                Description: Will be trigger this function after table rendering
                finished.
              </li>
              <li>
                Type: <span class="text-green">(elements) =&gt; void</span>
              </li>
              <li>
                Arguments:
                <ul class="list-square pl-10">
                  <li>
                    <ul class="list-disc pl-10">
                      <b>elements</b>
                      <li>
                        Description: Pass by has 「is-rows-el」 class name's
                        elements.
                      </li>
                      <li>Required: <span class="text-green">No</span></li>
                      <li>Type: <span class="text-green">Array</span></li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li class="mb-2">
            <b>return-checked-rows</b>
            <ul class="list-disc pl-10">
              <li>
                Description: Will be call this function after table checkbox on
                checked.
              </li>
              <li>
                Type: <span class="text-green">(rowsKey) =&gt; void</span>
              </li>
              <li>
                Arguments:
                <ul class="list-square pl-10">
                  <li>
                    <ul class="list-disc pl-10">
                      <b>rowsKey</b>
                      <li>
                        Description: Pass by checked row's key field name.
                      </li>
                      <li>Required: <span class="text-green">No</span></li>
                      <li>Type: <span class="text-green">Number</span></li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li class="mb-2">
            <b>get-now-page</b>
            <ul class="list-disc pl-10">
              <li>Description: You can get now page no from this function.</li>
              <li>Type: <span class="text-green">(pageNo) =&gt; void</span></li>
              <li>
                Arguments:
                <ul class="list-square pl-10">
                  <li>
                    <ul class="list-disc pl-10">
                      <b>pageNo</b>
                      <li>Description: Pass by page no.</li>
                      <li>Required: <span class="text-green">No</span></li>
                      <li>Type: <span class="text-green">Number</span></li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li class="mb-2">
            <b>row-clicked</b>
            <ul class="list-disc pl-10">
              <li>
                Description: You can get row data from this function after row
                clicked.
              </li>
              <li>
                Type: <span class="text-green">(rowData) =&gt; void</span>
              </li>
              <li>
                Arguments:
                <ul class="list-square pl-10">
                  <li>
                    <ul class="list-disc pl-10">
                      <b>rowData</b>
                      <li>Description: Pass by row data.</li>
                      <li>Required: <span class="text-green">No</span></li>
                      <li>Type: <span class="text-green">Object</span></li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <div id="slots">
      <h1 class="head">Slots</h1>
      <h1 class="text-base py-2">
        This is option. But, If you enabled V-slot mode, You should be to write
        it.
      </h1>
      <div>
        <ul class="pl-5 list-square">
          <li>
            <b>Field's name</b>
            <ul class="pl-10 list-disc">
              <li>
                Description:
                <span class="text-green">Show Row data's scope</span>
              </li>
              <li>
                <h1 class="text-sm font-semibold py-2">
                  Usage (Custom every one)
                </h1>
                <div
                  v-highlight
                  class="bg-light-gray bg-opacity-5 py-3 px-4 mt-1 rounded"
                >
                  <pre class="language-vue">
                 <code >
               {{codeBlock}}
                 </code>
             </pre>
                </div>
                <h1 class="text-sm font-semibold py-2">Usage (All to same)</h1>
                <div
                  v-highlight
                  class="bg-light-gray bg-opacity-5 py-3 px-4 mt-1 rounded"
                >
                  <pre class="language-vue">
                 <code >
               {{codeBlock2}}
                 </code>
             </pre>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script  setup>
import { ref } from "vue";
import Header from "../../components/Header.vue";
let scrollBehavior = () => {
  document.getElementById("app")?.scrollIntoView({ behavior: "smooth" });
};
scrollBehavior();
let usageList = ref([
  {
    title: "Props",
  },
  {
    title: "Events",
  },
]);
let codeBlock = `
<template v-slot:id="data">
  <YourComponent>{{ data.value.id }}</YourComponent>
</template>
<template v-slot:name="data">
  <YourComponent>{{ data.value.name }}</YourComponent>
</template>
<template v-slot:email="data">
  <YourComponent>{{ data.value.email }}</YourComponent>
</template>`;
let codeBlock2 = `
<template v-for="(col, i) of table.columns" v-slot:[col.field]="data" :key="i">
  <YourComponent>{{ data.value[col.field] }}</YourComponent>
</template>
`;
</script>
<style scoped>
.head {
  @apply border-b border-green border-opacity-25 mt-4 py-3 text-2xl font-semibold px-3;
}
</style>
