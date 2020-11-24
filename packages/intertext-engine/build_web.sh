rm -rf dist/web
mkdir -p dist/web

PARAMS=(

  -std=c++11

  # --- input
  src/main.cpp

  # --- compiler optimizations
  -Os
  #-O1
  #-O2
  #-O3
  #-Os
  #-Oz

  # --- emscripten build options
  -s WASM=1
  -s SIDE_MODULE=1
  -s BINARYEN_ASYNC_COMPILATION=0

  # --- output
  -o dist/web/engine.wasm
)

em++ ${PARAMS[@]}
  