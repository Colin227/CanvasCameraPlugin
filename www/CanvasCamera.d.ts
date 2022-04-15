declare global {
    interface Window {
        Ionic?: any;
        plugin: {
            CanvasCamera: CanvasCamera;
        };
        CanvasCamera: CanvasCamera;
    }
}
export declare type CanvasCameraUISize = CanvasCameraCanvasSize;
export declare type CanvasCameraUseImageAs = 'data' | 'file';
export declare type CanvasCameraCameraFacing = 'front' | 'back';
export declare type CanvasCameraPluginCallback = <D>(data: D) => void;
export declare type CanvasCameraPluginResultCallbackFunction = (data: CanvasCameraData) => void;
export declare type CanvasCameraEventMethodName = 'beforeFrameRendering' | 'afterFrameRendering' | 'beforeFrameInitialization' | 'afterFrameInitialization' | 'beforeRenderingPresets' | 'afterRenderingPresets';
export declare type CanvasCameraEventName = Lowercase<CanvasCameraEventMethodName>;
export interface CanvasCameraCanvasElements {
    fullsize: HTMLCanvasElement;
    thumbnail?: HTMLCanvasElement;
}
export interface CanvasCameraRenderers {
    fullsize: CanvasCameraRenderer;
    thumbnail?: CanvasCameraRenderer;
    [key: string]: CanvasCameraRenderer | undefined;
}
export interface CanvasCameraEventDetail {
    context: CanvasCamera | CanvasCameraRenderer | CanvasCameraFrame;
    data: CanvasCamera | CanvasCameraRenderer | CanvasCameraFrame;
}
export interface CanvasCameraUserOptions {
    width?: number;
    height?: number;
    cameraFacing?: CanvasCameraCameraFacing;
    canvas?: {
        width?: number;
        height?: number;
    };
    capture?: {
        width?: number;
        height?: number;
    };
    use?: CanvasCameraUseImageAs;
    fps?: number;
    flashMode?: boolean;
    hasThumbnail?: boolean;
    thumbnailRatio?: number;
    onAfterDraw?: <F>(frame: F) => void;
    onBeforeDraw?: <F>(frame: F) => void;
}
export interface CanvasCameraDataImages {
    orientation?: CanvasCameraOrientation;
    fullsize?: CanvasCameraDataImage;
    thumbnail: CanvasCameraDataImage;
}
export interface CanvasCameraDataOutput {
    images?: CanvasCameraDataImages;
}
export interface CanvasCameraCaptureId {
    id?: number;
}
export interface CanvasCameraCaptureFps {
    min?: number;
    max?: number;
}
export interface CanvasCameraCaptureSettings {
    width?: number;
    height?: number;
    format?: number;
    started?: boolean;
    focusMode?: string;
    fps?: CanvasCameraCaptureFps | number;
    camera?: CanvasCameraCaptureId;
}
export interface CanvasCameraData {
    message?: string;
    options?: CanvasCameraUserOptions;
    preview?: CanvasCameraCaptureSettings;
    output?: CanvasCameraDataOutput;
}
export interface CanvasCameraInterface {
    onCapture: CanvasCameraPluginCallback | undefined;
    nativeClass: string;
    canvas: CanvasCameraRenderers;
    options: CanvasCameraUserOptions;
    beforeFrameRendering(listener: CanvasCameraEventListener): this;
    afterFrameRendering(listener: CanvasCameraEventListener): this;
    beforeFrameInitialization(listener: CanvasCameraEventListener): this;
    afterFrameInitialization(listener: CanvasCameraEventListener): this;
    beforeRenderingPresets(listener: CanvasCameraEventListener): this;
    afterRenderingPresets(listener: CanvasCameraEventListener): this;
    dispatch(this: CanvasCamera, eventName: CanvasCameraEventName, context: CanvasCamera | CanvasCameraRenderer | CanvasCameraFrame, data?: CanvasCamera | CanvasCameraRenderer | CanvasCameraFrame): void;
    initialize(fcanvas: HTMLCanvasElement | CanvasCameraCanvasElements, tcanvas?: HTMLCanvasElement): void;
    start(userOptions: CanvasCameraUserOptions, onError?: CanvasCameraPluginResultCallbackFunction, onSuccess?: CanvasCameraPluginResultCallbackFunction): void;
    stop(onError?: CanvasCameraPluginResultCallbackFunction, onSuccess?: CanvasCameraPluginResultCallbackFunction): void;
    flashMode(flashMode: boolean, onError?: CanvasCameraPluginResultCallbackFunction, onSuccess?: CanvasCameraPluginResultCallbackFunction): void;
    cameraPosition(cameraFacing: CanvasCameraCameraFacing, onError?: CanvasCameraPluginResultCallbackFunction, onSuccess?: CanvasCameraPluginResultCallbackFunction): void;
    capture(data: CanvasCameraData): void;
    createFrame(image: HTMLImageElement, element: HTMLCanvasElement, renderer: CanvasCameraRenderer): CanvasCameraFrame;
    createRenderer(element: HTMLCanvasElement, canvasCamera: CanvasCamera): CanvasCameraRenderer;
    enableRenderers(): void;
    disableRenderers(): void;
    setRenderingPresets(): this;
    getUISize(): CanvasCameraCanvasSize;
    getUIOrientation(): CanvasCameraOrientation;
    setRenderersSize(size: CanvasCameraCanvasSize): this;
}
export declare type CanvasCameraOrientation = 'portrait' | 'landscape';
export declare type CanvasCameraEventListener = <E, D>(event: E, data?: D) => void;
export interface CanvasCameraCanvasSize {
    height: number;
    width: number;
    auto?: boolean;
}
export interface CanvasCameraDataImage {
    data?: string;
    file?: string;
    path?: string;
    rotation?: number;
    orientation?: CanvasCameraOrientation;
    timestamp?: number;
}
export interface CanvasCameraRendererInterface {
    data: CanvasCameraDataImage | undefined;
    size: CanvasCameraCanvasSize | undefined;
    image: HTMLImageElement | undefined;
    context: CanvasRenderingContext2D | undefined | null;
    orientation: CanvasCameraOrientation | undefined;
    buffer: CanvasCameraDataImage[];
    available: boolean;
    fullscreen: boolean;
    element: HTMLCanvasElement;
    canvasCamera: CanvasCamera;
    onAfterDraw: CanvasCameraPluginCallback | undefined;
    onBeforeDraw: CanvasCameraPluginCallback | undefined;
    initialize(): this;
    onOrientationChange(): void;
    clear(): this;
    draw(frame: CanvasCameraFrame): this;
    bufferize(data: CanvasCameraDataImage): this;
    run(): this;
    render(data: CanvasCameraDataImage): this;
    enable(): this;
    disable(): this;
    enabled(): boolean;
    disabled(): boolean;
    invert(): this;
    resize(): this;
    setSize(size: CanvasCameraCanvasSize, auto?: boolean): this;
    setOnBeforeDraw(onBeforeDraw: CanvasCameraPluginCallback): this;
    setOnAfterDraw(onAfterDraw: CanvasCameraPluginCallback): this;
}
export interface CanvasCameraFrameInterface {
    ratio: number;
    sx: number;
    sy: number;
    sWidth: number;
    sHeight: number;
    dx: number;
    dy: number;
    dWidth: number;
    dHeight: number;
    renderer: CanvasCameraRenderer;
    image: HTMLImageElement;
    element: HTMLCanvasElement;
    initialize(): this;
    recycle(): void;
}
export declare class CanvasCameraFrame implements CanvasCameraFrameInterface {
    ratio: number;
    sx: number;
    sy: number;
    sWidth: number;
    sHeight: number;
    dx: number;
    dy: number;
    dWidth: number;
    dHeight: number;
    renderer: CanvasCameraRenderer;
    image: HTMLImageElement;
    element: HTMLCanvasElement;
    constructor(image: HTMLImageElement, element: HTMLCanvasElement, renderer: CanvasCameraRenderer);
    initialize(): this;
    recycle(): void;
}
export declare class CanvasCameraRenderer implements CanvasCameraRendererInterface {
    data: CanvasCameraDataImage | undefined;
    size: CanvasCameraCanvasSize | undefined;
    image: HTMLImageElement | undefined;
    context: CanvasRenderingContext2D | undefined | null;
    orientation: CanvasCameraOrientation | undefined;
    buffer: CanvasCameraDataImage[];
    available: boolean;
    fullscreen: boolean;
    element: HTMLCanvasElement;
    canvasCamera: CanvasCamera;
    onAfterDraw: CanvasCameraPluginCallback | undefined;
    onBeforeDraw: CanvasCameraPluginCallback | undefined;
    constructor(element: HTMLCanvasElement, canvasCamera: CanvasCamera);
    initialize(): this;
    onOrientationChange(): void;
    clear(): this;
    draw(frame: CanvasCameraFrame): this;
    bufferize(data: CanvasCameraDataImage): this;
    run(): this;
    render(data: CanvasCameraDataImage): this;
    enable(): this;
    disable(): this;
    enabled(): boolean;
    disabled(): boolean;
    invert(): this;
    resize(): this;
    setSize(size: CanvasCameraCanvasSize, auto?: boolean): this;
    setOnBeforeDraw(onBeforeDraw: CanvasCameraPluginCallback): this;
    setOnAfterDraw(onAfterDraw: CanvasCameraPluginCallback): this;
}
export default class CanvasCamera implements CanvasCameraInterface {
    static instance: CanvasCamera;
    onCapture: CanvasCameraPluginCallback | undefined;
    nativeClass: string;
    canvas: CanvasCameraRenderers;
    options: CanvasCameraUserOptions;
    static getInstance(): CanvasCamera;
    static initialize(fcanvas: HTMLCanvasElement | CanvasCameraCanvasElements, tcanvas?: HTMLCanvasElement): void;
    static start(userOptions: CanvasCameraUserOptions, onError?: CanvasCameraPluginResultCallbackFunction, onSuccess?: CanvasCameraPluginResultCallbackFunction): void;
    static stop(onError?: CanvasCameraPluginResultCallbackFunction, onSuccess?: CanvasCameraPluginResultCallbackFunction): void;
    static cameraPosition(cameraFacing: CanvasCameraCameraFacing, onError?: CanvasCameraPluginResultCallbackFunction, onSuccess?: CanvasCameraPluginResultCallbackFunction): void;
    static flashMode(flashMode: boolean, onError?: CanvasCameraPluginResultCallbackFunction, onSuccess?: CanvasCameraPluginResultCallbackFunction): void;
    beforeFrameRendering(listener: CanvasCameraEventListener): this;
    static beforeFrameRendering(listener: CanvasCameraEventListener): CanvasCamera;
    afterFrameRendering(listener: CanvasCameraEventListener): this;
    static afterFrameRendering(listener: CanvasCameraEventListener): CanvasCamera;
    beforeFrameInitialization(listener: CanvasCameraEventListener): this;
    static beforeFrameInitialization(listener: CanvasCameraEventListener): CanvasCamera;
    afterFrameInitialization(listener: CanvasCameraEventListener): this;
    static afterFrameInitialization(listener: CanvasCameraEventListener): CanvasCamera;
    beforeRenderingPresets(listener: CanvasCameraEventListener): this;
    static beforeRenderingPresets(listener: CanvasCameraEventListener): CanvasCamera;
    afterRenderingPresets(listener: CanvasCameraEventListener): this;
    static afterRenderingPresets(listener: CanvasCameraEventListener): CanvasCamera;
    private triggerEvent;
    dispatch(this: CanvasCamera, eventName: CanvasCameraEventName, context: CanvasCamera | CanvasCameraRenderer | CanvasCameraFrame, data?: CanvasCamera | CanvasCameraRenderer | CanvasCameraFrame): void;
    initialize(fcanvas: HTMLCanvasElement | CanvasCameraCanvasElements, tcanvas?: HTMLCanvasElement): void;
    start(userOptions: CanvasCameraUserOptions, onError?: CanvasCameraPluginResultCallbackFunction, onSuccess?: CanvasCameraPluginResultCallbackFunction): void;
    stop(onError?: CanvasCameraPluginResultCallbackFunction, onSuccess?: CanvasCameraPluginResultCallbackFunction): void;
    flashMode(flashMode: boolean, onError?: CanvasCameraPluginResultCallbackFunction, onSuccess?: CanvasCameraPluginResultCallbackFunction): void;
    cameraPosition(cameraFacing: CanvasCameraCameraFacing, onError?: CanvasCameraPluginResultCallbackFunction, onSuccess?: CanvasCameraPluginResultCallbackFunction): void;
    capture(data: CanvasCameraData): void;
    createFrame(image: HTMLImageElement, element: HTMLCanvasElement, renderer: CanvasCameraRenderer): CanvasCameraFrame;
    createRenderer(element: HTMLCanvasElement, canvasCamera: CanvasCamera): CanvasCameraRenderer;
    enableRenderers(): void;
    disableRenderers(): void;
    setRenderingPresets(): this;
    getUISize(): CanvasCameraCanvasSize;
    getUIOrientation(): CanvasCameraOrientation;
    setRenderersSize(size: CanvasCameraCanvasSize): this;
}
//# sourceMappingURL=CanvasCamera.d.ts.map