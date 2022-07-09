<template>
  <section>
    <Header :title="i18n.$t('api_reference')" />
  </section>
  <section class="pt-20 px-3 pb-10">
    <div id="props">
      <h1 class="head">{{ i18n.$t("props") }}</h1>
      <div class="pt-2">
        <ul class="list-square pl-5">
          <li class="mb-2 list-square">
            <b>title</b>
            <ul class="list-disc pl-10">
              <li>
                {{ i18n.$t("description") }}:
                {{ i18n.$t("props_table_title_desc") }}
              </li>
              <li>
                {{ i18n.$t("required") }}: <span class="text-green">No</span>
              </li>
              <li>
                {{ i18n.$t("type") }}: <span class="text-green">String</span>
              </li>
              <li>
                {{ i18n.$t("default") }}: <span class="text-green">""</span>
              </li>
            </ul>
          </li>
          <li class="mb-2 list-square">
            <b>is-slot-mode</b>
            <ul class="list-disc pl-10">
              <li>
                {{ i18n.$t("description") }}:
                {{ i18n.$t("props_is_slot_mode_desc") }}
              </li>
              <li>
                {{ i18n.$t("required") }}: <span class="text-green">No</span>
              </li>
              <li>
                {{ i18n.$t("type") }}: <span class="text-green">Boolean</span>
              </li>
              <li>
                {{ i18n.$t("default") }}: <span class="text-green">false</span>
              </li>
            </ul>
          </li>
          <li class="mb-2 list-square">
            <b>is-static-mode</b>
            <ul class="list-disc pl-10">
              <li>
                {{ i18n.$t("description") }}:
                {{ i18n.$t("props_is_static_mode_desc") }}
              </li>
              <li>
                {{ i18n.$t("required") }}: <span class="text-green">No</span>
              </li>
              <li>
                {{ i18n.$t("type") }}: <span class="text-green">Boolean</span>
              </li>
              <li>
                {{ i18n.$t("default") }}: <span class="text-green">false</span>
              </li>
            </ul>
          </li>
          <li class="mb-2 list-square">
            <b>has-checkbox</b>
            <ul class="list-disc pl-10">
              <li>
                {{ i18n.$t("description") }}:
                {{ i18n.$t("props_has_checkbox_desc") }}
              </li>
              <li>
                {{ i18n.$t("required") }}: <span class="text-green">No</span>
              </li>
              <li>
                {{ i18n.$t("type") }}: <span class="text-green">Boolean</span>
              </li>
              <li>
                {{ i18n.$t("default") }}: <span class="text-green">false</span>
              </li>
            </ul>
          </li>
          <li class="mb-2 list-square">
            <b>checked-return-type</b>
            <ul class="list-disc pl-10">
              <li>
                {{ i18n.$t("description") }}:
                {{ i18n.$t("props_checked_return_type_desc") }}
              </li>
              <li>
                {{ i18n.$t("required") }}: <span class="text-green">No</span>
              </li>
              <li>
                {{ i18n.$t("type") }}: <span class="text-green">String</span>
              </li>
              <li>
                {{ i18n.$t("default") }}: <span class="text-green">key</span>
              </li>
              <li>
                {{ i18n.$t("values") }}:
                <span class="text-green">key | row</span>
              </li>
            </ul>
          </li>
          <li class="mb-2 list-square">
            <b>is-loading</b>
            <ul class="list-disc pl-10">
              <li>
                {{ i18n.$t("description") }}:
                {{ i18n.$t("props_is_loading_desc") }}
              </li>
              <li>
                {{ i18n.$t("required") }}: <span class="text-green">No</span>
              </li>
              <li>
                {{ i18n.$t("type") }}: <span class="text-green">Boolean</span>
              </li>
              <li>
                {{ i18n.$t("default") }}: <span class="text-green">false</span>
              </li>
            </ul>
          </li>
          <li class="mb-2 list-square">
            <b>is-re-search</b>
            <ul class="list-disc pl-10">
              <li>
                {{ i18n.$t("description") }}:
                {{ i18n.$t("props_is_re_search_desc") }}
              </li>
              <li>
                {{ i18n.$t("required") }}: <span class="text-green">No</span>
              </li>
              <li>
                {{ i18n.$t("type") }}: <span class="text-green">Boolean</span>
              </li>
              <li>
                {{ i18n.$t("default") }}: <span class="text-green">false</span>
              </li>
            </ul>
          </li>
          <li class="mb-2 list-square">
            <b>columns</b>
            <ul class="list-disc pl-10">
              <li>
                {{ i18n.$t("description") }}:
                {{ i18n.$t("props_columns_desc") }}
              </li>
              <li>
                {{ i18n.$t("required") }}: <span class="text-danger">Yes</span>
              </li>
              <li>
                {{ i18n.$t("type") }}: <span class="text-green">Array</span>
              </li>
              <li>
                {{ i18n.$t("default") }}: <span class="text-green">null</span>
              </li>
              <ul class="list-disc pl-10">
                <li class="mb-2 list-square">
                  <ul class="list-disc pl-10">
                    <b>isKey</b>
                    <li>
                      {{ i18n.$t("description") }}:
                      {{ i18n.$t("props_columns_isKey_desc") }}
                    </li>
                    <li>
                      {{ i18n.$t("required") }}:
                      <span class="text-green">No</span>
                    </li>
                    <li>
                      {{ i18n.$t("type") }}:
                      <span class="text-green">Boolean</span>
                    </li>
                    <li>
                      {{ i18n.$t("default") }}:
                      <span class="text-green">false</span>
                    </li>
                  </ul>
                </li>
                <li class="mb-2 list-square">
                  <ul class="list-disc pl-10">
                    <b>label</b>
                    <li>
                      {{ i18n.$t("description") }}:
                      {{ i18n.$t("props_columns_label_desc") }}
                    </li>
                    <li>
                      {{ i18n.$t("required") }}:
                      <span class="text-danger">Yes</span>
                    </li>
                    <li>
                      {{ i18n.$t("type") }}:
                      <span class="text-green">string</span>
                    </li>
                  </ul>
                </li>
                <li class="mb-2 list-square">
                  <ul class="list-disc pl-10">
                    <b>field</b>
                    <li>
                      {{ i18n.$t("description") }}:
                      {{ i18n.$t("props_columns_field_desc") }}
                    </li>
                    <li>
                      {{ i18n.$t("required") }}:
                      <span class="text-danger">Yes</span>
                    </li>
                    <li>
                      {{ i18n.$t("type") }}:
                      <span class="text-green">string</span>
                    </li>
                  </ul>
                </li>
                <li class="mb-2 list-square">
                  <ul class="list-disc pl-10">
                    <b>width</b>
                    <li>
                      {{ i18n.$t("description") }}:
                      {{ i18n.$t("props_columns_width_desc") }}
                    </li>
                    <li>
                      {{ i18n.$t("required") }}:
                      <span class="text-green">No</span>
                    </li>
                    <li>
                      {{ i18n.$t("type") }}:
                      <span class="text-green">string</span>
                    </li>
                  </ul>
                </li>
                <li class="mb-2 list-square">
                  <ul class="list-disc pl-10">
                    <b>sortable</b>
                    <li>
                      {{ i18n.$t("description") }}:
                      {{ i18n.$t("props_columns_sortable_desc") }}
                    </li>
                    <li>
                      {{ i18n.$t("required") }}:
                      <span class="text-green">No</span>
                    </li>
                    <li>
                      {{ i18n.$t("type") }}:
                      <span class="text-green">Boolean</span>
                    </li>
                    <li>
                      {{ i18n.$t("default") }}:
                      <span class="text-green">false</span>
                    </li>
                  </ul>
                </li>
                <li class="mb-2 list-square">
                  <ul class="list-disc pl-10">
                    <b>display</b>
                    <li>
                      {{ i18n.$t("description") }}:
                      {{ i18n.$t("props_columns_display_desc") }}
                    </li>
                    <li>
                      {{ i18n.$t("required") }}:
                      <span class="text-green">No</span>
                    </li>
                    <li>
                      {{ i18n.$t("type") }}:
                      <span class="text-green">Function</span>
                    </li>
                    <li>
                      {{ i18n.$t("default") }}:
                      <span class="text-green">null</span>
                    </li>
                  </ul>
                </li>
                <li class="mb-2 list-square">
                  <ul class="list-disc pl-10">
                    <b>headerClasses</b>
                    <li>
                      {{ i18n.$t("description") }}:
                      {{ i18n.$t("props_columns_headerClasses_desc") }}
                    </li>
                    <li>
                      {{ i18n.$t("required") }}:
                      <span class="text-green">No</span>
                    </li>
                    <li>
                      {{ i18n.$t("type") }}:
                      <span class="text-green">Array</span>
                    </li>
                    <li>
                      {{ i18n.$t("default") }}:
                      <span class="text-green">null</span>
                    </li>
                    <li>
                      {{ i18n.$t("example") }}:
                      <span class="text-green">["bg-gray", "color-red"]</span>
                    </li>
                  </ul>
                </li>
                <li class="mb-2 list-square">
                  <ul class="list-disc pl-10">
                    <b>columnClasses</b>
                    <li>
                      {{ i18n.$t("description") }}:
                      {{ i18n.$t("props_columns_columnClasses_desc") }}
                    </li>
                    <li>
                      {{ i18n.$t("required") }}:
                      <span class="text-green">No</span>
                    </li>
                    <li>
                      {{ i18n.$t("type") }}:
                      <span class="text-green">Array</span>
                    </li>
                    <li>
                      {{ i18n.$t("default") }}:
                      <span class="text-green">null</span>
                    </li>
                    <li>
                      {{ i18n.$t("example") }}:
                      <span class="text-green">["bg-gray", "color-red"]</span>
                    </li>
                  </ul>
                </li>
                <li class="mb-2 list-square">
                  <ul class="list-disc pl-10">
                    <b>headerStyles</b>
                    <li>
                      {{ i18n.$t("description") }}:
                      {{ i18n.$t("props_columns_headerStyles_desc") }}
                    </li>
                    <li>
                      {{ i18n.$t("required") }}:
                      <span class="text-green">No</span>
                    </li>
                    <li>
                      {{ i18n.$t("type") }}:
                      <span class="text-green">Object</span>
                    </li>
                    <li>
                      {{ i18n.$t("default") }}:
                      <span class="text-green">null</span>
                    </li>
                    <li>
                      {{ i18n.$t("example") }}:
                      <span class="text-green"
                        >{"background": "gray", "color": "red"}</span
                      >
                    </li>
                  </ul>
                </li>
                <li class="mb-2 list-square">
                  <ul class="list-disc pl-10">
                    <b>columnStyles</b>
                    <li>
                      {{ i18n.$t("description") }}:
                      {{ i18n.$t("props_columns_columnStyles_desc") }}
                    </li>
                    <li>
                      {{ i18n.$t("required") }}:
                      <span class="text-green">No</span>
                    </li>
                    <li>
                      {{ i18n.$t("type") }}:
                      <span class="text-green">Object</span>
                    </li>
                    <li>
                      {{ i18n.$t("default") }}:
                      <span class="text-green">null</span>
                    </li>
                    <li>
                      {{ i18n.$t("example") }}:
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
            <li>
              {{ i18n.$t("description") }}: {{ i18n.$t("props_rows_desc") }}
            </li>
            <li>
              {{ i18n.$t("required") }}: <span class="text-danger">Yes</span>
            </li>
            <li>
              {{ i18n.$t("type") }}: <span class="text-green">Array</span>
            </li>
          </ul>
        </li>
        <li class="mb-2 list-square">
          <b>rowClasses</b>
          <ul class="list-disc pl-10">
            <li>
              {{ i18n.$t("description") }}:
              {{ i18n.$t("props_rowClasses_desc") }}
            </li>
            <li>
              {{ i18n.$t("required") }}: <span class="text-danger">No</span>
            </li>
            <li>
              {{ i18n.$t("type") }}:
              <span class="text-green">Array | Function</span>
            </li>
            <li>
              {{ i18n.$t("example") }}:
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
            <li>
              {{ i18n.$t("description") }}: {{ i18n.$t("props_total_desc") }}
            </li>
            <li>
              {{ i18n.$t("required") }}: <span class="text-danger">Yes</span>
            </li>
            <li>
              {{ i18n.$t("type") }}: <span class="text-green">Number</span>
            </li>
          </ul>
        </li>
        <li class="mb-2 list-square">
          <b>sortable</b>
          <ul class="list-disc pl-10">
            <li>
              {{ i18n.$t("description") }}: {{ i18n.$t("props_sortable_desc") }}
            </li>
            <li>
              {{ i18n.$t("required") }}: <span class="text-danger">Yes</span>
            </li>
            <li>
              {{ i18n.$t("type") }}: <span class="text-green">Object</span>
            </li>
            <ul class="list-disc pl-10">
              <li class="mb-2 list-square">
                <ul class="list-disc pl-10">
                  <b>order</b>
                  <li>
                    {{ i18n.$t("description") }}:
                    {{ i18n.$t("props_sortable_order_desc") }}
                  </li>
                  <li>
                    {{ i18n.$t("required") }}:
                    <span class="text-danger">Yes</span>
                  </li>
                  <li>
                    {{ i18n.$t("type") }}:
                    <span class="text-green">string</span>
                  </li>
                </ul>
              </li>
              <li class="mb-2 list-square">
                <ul class="list-disc pl-10">
                  <b>sort</b>
                  <li>
                    {{ i18n.$t("description") }}:
                    {{ i18n.$t("props_sortable_sort_desc") }}
                  </li>
                  <li>
                    {{ i18n.$t("required") }}:
                    <span class="text-danger">Yes</span>
                  </li>
                  <li>
                    {{ i18n.$t("type") }}:
                    <span class="text-green">string</span>
                  </li>
                </ul>
              </li>
            </ul>
          </ul>
        </li>
        <li class="mb-2 list-square">
          <b>messages</b>
          <ul class="list-disc pl-10">
            <li>
              {{ i18n.$t("description") }}: {{ i18n.$t("props_messages_desc") }}
            </li>
            <li>
              {{ i18n.$t("required") }}: <span class="text-green">No</span>
            </li>
            <li>
              {{ i18n.$t("type") }}: <span class="text-green">Object</span>
            </li>
            <ul class="list-disc pl-10">
              <li class="mb-2 list-square">
                <ul class="list-disc pl-10">
                  <b>pagingInfo</b>
                  <li>
                    {{ i18n.$t("description") }}:
                    {{ i18n.$t("props_messages_pagingInfo_desc") }}
                  </li>
                  <li>
                    {{ i18n.$t("required") }}:
                    <span class="text-green">No</span>
                  </li>
                  <li>
                    {{ i18n.$t("type") }}:
                    <span class="text-green">string</span>
                  </li>
                  <li>
                    {{ i18n.$t("default") }}:
                    <span class="text-green">"Showing {0}-{1} of {2}"</span>
                  </li>
                </ul>
              </li>
              <li class="mb-2 list-square">
                <ul class="list-disc pl-10">
                  <b>pageSizeChangeLabel</b>
                  <li>
                    {{ i18n.$t("description") }}:
                    {{ i18n.$t("props_messages_pageSizeChangeLabel_desc") }}
                  </li>
                  <li>
                    {{ i18n.$t("required") }}:
                    <span class="text-green">No</span>
                  </li>
                  <li>
                    {{ i18n.$t("type") }}:
                    <span class="text-green">string</span>
                  </li>
                  <li>
                    {{ i18n.$t("default") }}:
                    <span class="text-green">"Row count:"</span>
                  </li>
                </ul>
              </li>
              <li class="mb-2 list-square">
                <ul class="list-disc pl-10">
                  <b>gotoPageLabel</b>
                  <li>
                    {{ i18n.$t("description") }}:
                    {{ i18n.$t("props_messages_gotoPageLabel_desc") }}
                  </li>
                  <li>
                    {{ i18n.$t("required") }}:
                    <span class="text-green">No</span>
                  </li>
                  <li>
                    {{ i18n.$t("type") }}:
                    <span class="text-green">string</span>
                  </li>
                  <li>
                    {{ i18n.$t("default") }}:
                    <span class="text-green">"Go to page:"</span>
                  </li>
                </ul>
              </li>
              <li class="mb-2 list-square">
                <ul class="list-disc pl-10">
                  <b>noDataAvailable</b>
                  <li>
                    {{ i18n.$t("description") }}:
                    {{ i18n.$t("props_messages_noDataAvailable_desc") }}
                  </li>
                  <li>
                    {{ i18n.$t("required") }}:
                    <span class="text-green">No</span>
                  </li>
                  <li>
                    {{ i18n.$t("type") }}:
                    <span class="text-green">string</span>
                  </li>
                  <li>
                    {{ i18n.$t("default") }}:
                    <span class="text-green">"No data"</span>
                  </li>
                </ul>
              </li>
            </ul>
          </ul>
        </li>
        <li class="mb-2 list-square">
          <b>is-hide-paging</b>
          <ul class="list-disc pl-10">
            <li>
              {{ i18n.$t("description") }}:
              {{ i18n.$t("props_is_hide_paging_desc") }}
            </li>
            <li>
              {{ i18n.$t("required") }}: <span class="text-green">No</span>
            </li>
            <li>
              {{ i18n.$t("type") }}: <span class="text-green">Boolean</span>
            </li>
            <li>
              {{ i18n.$t("default") }}: <span class="text-green">false</span>
            </li>
          </ul>
        </li>
        <li class="mb-2 list-square">
          <b>page</b>
          <ul class="list-disc pl-10">
            <li>
              {{ i18n.$t("description") }}: {{ i18n.$t("props_page_desc") }}
            </li>
            <li>
              {{ i18n.$t("required") }}: <span class="text-green">No</span>
            </li>
            <li>
              {{ i18n.$t("type") }}: <span class="text-green">Number</span>
            </li>
            <li>{{ i18n.$t("default") }}: <span class="text-green">1</span></li>
          </ul>
        </li>
        <li class="mb-2 list-square">
          <b>page-size</b>
          <ul class="list-disc pl-10">
            <li>
              {{ i18n.$t("description") }}:
              <span v-html="i18n.$t('props_page_size_desc')"></span>
            </li>
            <li>
              {{ i18n.$t("required") }}: <span class="text-green">No</span>
            </li>
            <li>
              {{ i18n.$t("type") }}: <span class="text-green">Number</span>
            </li>
            <li>
              {{ i18n.$t("default") }}: <span class="text-green">10</span>
            </li>
          </ul>
        </li>
        <li class="mb-2 list-square">
          <b>pageOptions</b>
          <ul class="list-disc pl-10">
            <li>
              {{ i18n.$t("description") }}:
              {{ i18n.$t("props_page_options_desc") }}
            </li>
            <li>
              {{ i18n.$t("required") }}: <span class="text-green">No</span>
            </li>
            <li>
              {{ i18n.$t("type") }}: <span class="text-green">Array</span>
            </li>
            <ul class="list-disc pl-10">
              <li class="mb-2 list-square">
                <ul class="list-disc pl-10">
                  <li>
                    {{ i18n.$t("required") }}:
                    <span class="text-green">Yes</span>
                  </li>
                  <li>
                    {{ i18n.$t("type") }}:
                    <span class="text-green">Object</span>
                  </li>
                  <li>
                    <ul class="list-disc pl-10">
                      <b>value</b>
                      <li>
                        {{ i18n.$t("required") }}:
                        <span class="text-green">Yes</span>
                      </li>
                      <li>
                        {{ i18n.$t("type") }}:
                        <span class="text-green">Number</span>
                      </li>
                    </ul>
                    <ul class="list-disc pl-10">
                      <b>text</b>
                      <li>
                        {{ i18n.$t("required") }}:
                        <span class="text-green">Yes</span>
                      </li>
                      <li>
                        {{ i18n.$t("type") }}:
                        <span class="text-green">Number | string</span>
                      </li>
                    </ul>
                  </li>
                  <li>
                    {{ i18n.$t("default") }}:[ { value: 10, text: 10 }, { value:
                    25, text: 25 }, { value: 50, text: 50 } ]
                  </li>
                </ul>
              </li>
            </ul>
          </ul>
        </li>
      </div>
    </div>
    <div id="events">
      <h1 class="head">{{ i18n.$t("events") }}</h1>
      <div class="pt-2">
        <ul class="list-square pl-5">
          <li class="mb-2">
            <b>do-search</b>
            <ul class="list-disc pl-10">
              <li>
                {{ i18n.$t("description") }}:
                <span v-html="i18n.$t('events_do_search_desc')"></span>
              </li>
              <li>
                {{ i18n.$t("hint") }}:
                <span class="text-red-500">{{
                  i18n.$t("events_do_search_hint")
                }}</span>
              </li>
              <li>
                {{ i18n.$t("type") }}:
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
                      <li>
                        {{ i18n.$t("description") }}:
                        {{ i18n.$t("events_do_search_offset_desc") }}
                      </li>
                      <li>
                        {{ i18n.$t("required") }}:
                        <span class="text-danger">Yes</span>
                      </li>
                      <li>
                        {{ i18n.$t("type") }}:
                        <span class="text-green">Number</span>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <ul class="list-disc pl-10">
                      <b>limit</b>
                      <li>
                        {{ i18n.$t("description") }}:
                        {{ i18n.$t("events_do_search_limit_desc") }}
                      </li>
                      <li>
                        {{ i18n.$t("required") }}:
                        <span class="text-danger">Yes</span>
                      </li>
                      <li>
                        {{ i18n.$t("type") }}:
                        <span class="text-green">Number</span>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <ul class="list-disc pl-10">
                      <b>order</b>
                      <li>
                        {{ i18n.$t("description") }}:
                        {{ i18n.$t("events_do_search_order_desc") }}
                      </li>
                      <li>
                        {{ i18n.$t("required") }}:
                        <span class="text-danger">Yes</span>
                      </li>
                      <li>
                        {{ i18n.$t("type") }}:
                        <span class="text-green">string</span>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <ul class="list-disc pl-10">
                      <b>sort</b>
                      <li>
                        {{ i18n.$t("description") }}:
                        {{ i18n.$t("events_do_search_sort_desc") }}
                      </li>
                      <li>
                        {{ i18n.$t("required") }}:
                        <span class="text-danger">Yes</span>
                      </li>
                      <li>
                        {{ i18n.$t("type") }}:
                        <span class="text-green">string</span>
                      </li>
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
                {{ i18n.$t("description") }}:
                {{ i18n.$t("events_is_finished_desc") }}
              </li>
              <li>
                {{ i18n.$t("type") }}:
                <span class="text-green">(elements) =&gt; void</span>
              </li>
              <li>
                Arguments:
                <ul class="list-square pl-10">
                  <li>
                    <ul class="list-disc pl-10">
                      <b>elements</b>
                      <li>
                        {{ i18n.$t("description") }}:
                        {{ i18n.$t("events_is_finished_elements_desc") }}
                      </li>
                      <li>
                        {{ i18n.$t("required") }}:
                        <span class="text-green">No</span>
                      </li>
                      <li>
                        {{ i18n.$t("type") }}:
                        <span class="text-green">Array</span>
                      </li>
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
                {{ i18n.$t("description") }}:
                {{ i18n.$t("events_return_checked_rows_desc") }}
              </li>
              <li>
                {{ i18n.$t("type") }}:
                <span class="text-green">(rowsKey) =&gt; void</span>
              </li>
              <li>
                Arguments:
                <ul class="list-square pl-10">
                  <li>
                    <ul class="list-disc pl-10">
                      <b>rowsKey</b>
                      <li>
                        {{ i18n.$t("description") }}:
                        {{ i18n.$t("events_return_checked_rows_rowsKey_desc") }}
                      </li>
                      <li>
                        {{ i18n.$t("required") }}:
                        <span class="text-green">No</span>
                      </li>
                      <li>
                        {{ i18n.$t("type") }}:
                        <span class="text-green">Number</span>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li class="mb-2">
            <b>get-now-page</b>
            <ul class="list-disc pl-10">
              <li>
                {{ i18n.$t("description") }}:
                {{ i18n.$t("events_get_now_page_desc") }}
              </li>
              <li>
                {{ i18n.$t("type") }}:
                <span class="text-green">(pageNo) =&gt; void</span>
              </li>
              <li>
                Arguments:
                <ul class="list-square pl-10">
                  <li>
                    <ul class="list-disc pl-10">
                      <b>pageNo</b>
                      <li>
                        {{ i18n.$t("description") }}:
                        {{ i18n.$t("events_get_now_page_pageNo_desc") }}
                      </li>
                      <li>
                        {{ i18n.$t("required") }}:
                        <span class="text-green">No</span>
                      </li>
                      <li>
                        {{ i18n.$t("type") }}:
                        <span class="text-green">Number</span>
                      </li>
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
                {{ i18n.$t("description") }}:
                {{ i18n.$t("events_row_clicked_desc") }}
              </li>
              <li>
                {{ i18n.$t("type") }}:
                <span class="text-green">(rowData) =&gt; void</span>
              </li>
              <li>
                Arguments:
                <ul class="list-square pl-10">
                  <li>
                    <ul class="list-disc pl-10">
                      <b>rowData</b>
                      <li>
                        {{ i18n.$t("description") }}:
                        {{ i18n.$t("events_row_clicked_rowData_desc") }}
                      </li>
                      <li>
                        {{ i18n.$t("required") }}:
                        <span class="text-green">No</span>
                      </li>
                      <li>
                        {{ i18n.$t("type") }}:
                        <span class="text-green">Object</span>
                      </li>
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
      <h1 class="head">{{ i18n.$t("slots") }}</h1>
      <h1 class="text-base py-2">{{ i18n.$t("slots_description") }}</h1>
      <div>
        <ul class="pl-5 list-square">
          <li>
            <b>{{ i18n.$t("slots_field_name") }}</b>
            <ul class="pl-10 list-disc">
              <li>
                {{ i18n.$t("description") }}:
                <span class="text-green">{{
                  i18n.$t("slots_field_name_desc")
                }}</span>
              </li>
              <li>
                <h1 class="text-sm font-semibold py-2">
                  {{ i18n.$t("slots_field_name_usage1") }}
                </h1>
                <div
                  v-highlight
                  class="bg-light-gray bg-opacity-5 py-3 px-4 mt-1 rounded overflow-x-auto relative"
                >
                  <pre class="language-vue">
                 <code class="font-code">
               {{ codeBlock }}
                 </code>
             </pre>
                  <p
                    @click="copy(codeBlock)"
                    class="absolute right-0 top-0 bg-gray/30 rounded p-1 text-xs cursor-pointer"
                  >
                    <svg
                      class="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                      ></path>
                    </svg>
                  </p>
                </div>
                <h1 class="text-sm font-semibold py-2">
                  {{ i18n.$t("slots_field_name_usage2") }}
                </h1>
                <div
                  v-highlight
                  class="bg-light-gray bg-opacity-5 py-3 px-4 mt-1 rounded overflow-x-auto relative "
                >
                  <pre class="language-vue ">
                 <code class="font-code">
               {{ codeBlock2 }}
                 </code>
             </pre>
                  <p
                    @click="copy(codeBlock2)"
                    class="absolute right-0 top-0 bg-gray/30 rounded p-1 text-xs cursor-pointer"
                  >
                    <svg
                      class="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                      ></path>
                    </svg>
                  </p>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script setup>
import Header from "../../components/Header.vue";
import { useI18n } from "../../plugins/i18n";
import useClipboard from "vue-clipboard3";
const i18n = useI18n();
let scrollBehavior = () => {
  document.getElementById("app")?.scrollIntoView({ behavior: "smooth" });
};
scrollBehavior();
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

const { toClipboard } = useClipboard();
const copy = async (text) => {
  try {
    await toClipboard(text);
    console.log("Copied to clipboard");
  } catch (e) {
    console.error(e);
  }
};
</script>
<style scoped>
.head {
  @apply border-b border-green border-opacity-25 mt-4 py-3 text-2xl font-semibold px-3;
}
</style>
