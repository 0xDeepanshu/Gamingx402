import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/ui/terminal"

export function TerminalDemo() {
  return (
    <Terminal>
      <TypingAnimation>&gt; gx402 --init engine</TypingAnimation>

      <AnimatedSpan className="text-green-500">
        ✔ Booting GX402 core modules...
      </AnimatedSpan>
      <AnimatedSpan className="text-green-500">
        ✔ Validating runtime environment.
      </AnimatedSpan>
      <AnimatedSpan className="text-green-500">
        ✔ Network link established with Solana devnet.
      </AnimatedSpan>
      <AnimatedSpan className="text-green-500">
        ✔ Payment facilitator verified.
      </AnimatedSpan>
      <AnimatedSpan className="text-green-500">
        ✔ Loading hyperspeed renderer.
      </AnimatedSpan>
      <AnimatedSpan className="text-green-500">
        ✔ Syncing AI control systems.
      </AnimatedSpan>
      <AnimatedSpan className="text-green-500">
        ✔ Deploying real-time telemetry protocols.
      </AnimatedSpan>
      <AnimatedSpan className="text-green-500">
        ✔ System integrity: 100%.
      </AnimatedSpan>

      <AnimatedSpan className="text-blue-500">
        <span>ℹ Configuration updated:</span>
        <span className="pl-2">- x402/core/engine.ts</span>
      </AnimatedSpan>

      <TypingAnimation className="text-muted-foreground">
        GX402 ready. Awaiting mission parameters.
      </TypingAnimation>
      <TypingAnimation className="text-muted-foreground">
        Launch sequence standing by...
      </TypingAnimation>
    </Terminal>
  )
}
export function TerminalDemoUnity({ projectName = "GX402-Unity", scene = "MainScene" }: { projectName?: string; scene?: string; }){
  return (
    <Terminal>
      <TypingAnimation>{`> gx402 --init unity --project ${projectName}`}</TypingAnimation>

      <AnimatedSpan className="text-green-500">✔ Creating Unity module...</AnimatedSpan>
      <AnimatedSpan className="text-green-500">✔ Importing x402.unitypackage</AnimatedSpan>
      <AnimatedSpan className="text-green-500">✔ Registering runtime bindings (C# ↔ Native)</AnimatedSpan>
      <AnimatedSpan className="text-green-500">✔ Injecting real-time telemetry hooks</AnimatedSpan>
      <AnimatedSpan className="text-green-500">✔ Linking payments & identity adapters</AnimatedSpan>

      <AnimatedSpan className="text-blue-500">
        <span>ℹ Configuration:</span>
        <span className="pl-2">{`/Packages/com.gx402/config.json`}</span>
      </AnimatedSpan>

      <TypingAnimation className="text-muted-foreground">
        {`> unity -batchmode -projectPath ./ -buildTarget WebGL -executeMethod BuildScript.PerformBuild -quit`}
      </TypingAnimation>

      <AnimatedSpan className="text-green-500">✔ Compiling player scripts...</AnimatedSpan>
      <AnimatedSpan className="text-green-500">✔ Building WebGL player (production)</AnimatedSpan>
      <AnimatedSpan className="text-green-500">✔ Stripping unused code & assets</AnimatedSpan>
      <AnimatedSpan className="text-green-500">✔ Uploading build to GX402 CDN</AnimatedSpan>
      <AnimatedSpan className="text-green-500">✔ Deploy complete — endpoint: /games/{projectName}/webgl</AnimatedSpan>

      <AnimatedSpan className="text-yellow-400">⚠ Note: Enable "Managed Stripping Level = Low" for faster iterative builds.</AnimatedSpan>

      <TypingAnimation className="text-muted-foreground">GX402 Unity module ready. Listening for runtime commands...</TypingAnimation>

      {/* show a short Unity C# BuildScript snippet inside the terminal */}
      <AnimatedSpan className="text-muted-foreground">
        <pre className="text-sm font-mono whitespace-pre-wrap">
{`// Assets/Editor/BuildScript.cs
using UnityEditor;
public static class BuildScript {
  public static void PerformBuild() {
    EditorUserBuildSettings.activeBuildTarget = BuildTarget.WebGL;
    string[] scenes = { "Assets/Scenes/${scene}.unity" };
    BuildPipeline.BuildPlayer(scenes, "Builds/WebGL", BuildTarget.WebGL, BuildOptions.None);
    // post-build hook: upload to GX402 CDN via gx402-cli
    System.Diagnostics.Process.Start("gx402", new[] { "upload", "Builds/WebGL", "--project", "${projectName}" });
  }
}`}
        </pre>
      </AnimatedSpan>
    </Terminal>
  )
}
